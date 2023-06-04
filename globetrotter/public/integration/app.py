from flask import Flask, jsonify, request
from flask_cors import CORS
import openai
import pickle
import openai
import os
import lancedb
import requests
from pathlib import Path
from bs4 import BeautifulSoup
import re

from langchain.document_loaders import UnstructuredHTMLLoader
from langchain.embeddings import OpenAIEmbeddings
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.vectorstores import LanceDB
from langchain.llms import OpenAI
from langchain.chains import RetrievalQA

app = Flask(__name__)
CORS(app)
# CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}}) # Enable CORS 

@app.route('/', methods=['POST'])
def submit_data():
    data = request.get_json()
    trip = data.get('tripName')
    country = data.get('country')
    regionCity = data.get("regionCity")

    openai.api_key = "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"

    # Function to fetch and save a page as an HTML file
    def save_page(url, save_dir):
        response = requests.get(url)
        if response.status_code == 200:
            soup = BeautifulSoup(response.content, 'html.parser')
            title = soup.find('title').text
            filename = f"{title}.html"
            with open(os.path.join(save_dir, filename), 'w', encoding='utf-8') as file:
                    file.write(str(soup))

    def get_document_title(document):
        m = str(document.metadata["source"])
        title = re.findall("(.*)\.html", m)
        print("PRINTING TITLES")
        print(title)

        if title[0] is not None:
            return(title[0])
        return ''

    # if "OPENAI_API_KEY" not in os.environ:
    openai.api_key = "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"

    assert len(openai.Model.list()["data"]) > 0
    print("fetching data")

    # Base URL of Wikivoyage
    base_url = "https://en.wikivoyage.org/wiki/"

    # List of page titles to download
    page_titles = ["London", "Paris", "New_York_City"]  # Add more as needed

    # Directory to save the HTML files
    save_directory = "./wikivoyage_pages"

    # Create the save directory if it doesn't exist
    if not os.path.exists(save_directory):
        os.makedirs(save_directory)

    # Loop through the page titles and download the pages
    for title in page_titles:
        url = f"{base_url}{title}"
        save_page(url, save_directory)

    docs_path = Path("cities.pkl")
    docs = []

    if not docs_path.exists():
        for p in Path("./wikivoyage_pages").rglob("*.html"):
            if p.is_dir():
                continue
            loader = UnstructuredHTMLLoader(p)
            raw_document = loader.load()
            
            m = {}
            m["title"] = get_document_title(raw_document[0])
            raw_document[0].metadata = raw_document[0].metadata | m
            raw_document[0].metadata["source"] = str(raw_document[0].metadata["source"])
            docs = docs + raw_document

        with docs_path.open("wb") as fh:
            pickle.dump(docs, fh)
    else:
        with docs_path.open("rb") as fh:
            docs = pickle.load(fh)

    #split text
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=500,
        chunk_overlap=50,
    )

    documents = text_splitter.split_documents(docs)

    embeddings = OpenAIEmbeddings(openai_api_key="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")

    db = lancedb.connect('/tmp/lancedb')
    table = db.create_table("city_docs", data=[
        {"vector": embeddings.embed_query("Hello World"), "text": "Hello World"}
    ], mode="overwrite")

    print("generated embeddings!")

    docsearch = LanceDB.from_documents(documents[5:], embeddings, connection=table)
    qa = RetrievalQA.from_chain_type(llm=OpenAI(openai_api_key="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"), chain_type="stuff", retriever=docsearch.as_retriever())

    

    query = "Create a 3 day intinerary to " + str(regionCity) + "," + str(country)
    # print(query)
    print(qa.run(query)) 
    print(type(qa.run(query)))

    # print(qa.run(query)) 
    embedding_response = str(qa.run(query))
    print("embedding response: " + embedding_response)

    response_data = {'tripName': trip, 'query': query, 'embeddingResponse': embedding_response}

    response = jsonify(response_data)
    # response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
    return response, 200

if __name__ == '__main__':
    app.run(port=5000)
