import pickle
import openai
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})
@app.route('/api/endpoint', methods=['POST'])


@app.after_request
def after_request(response):
  response.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");
  return response

def endpoint():
    form_data = request.get_json()
    trip= form_data.get('trip')
    country = form_data.get('country')
    print("TRIP AND COUNTRY: " + str(trip) + " " + str(country))
    openai.api_key = "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"

    query_file = open("query.pkl", "rb")
    qa = pickle.load(query_file)
    query_file.close()
    
    query = "Create a 2 day trip in" #+ form_data
    # print(qa.run(query))

    response_data = {'message': 'Data received successfully'}
    response = jsonify(response)
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')

    return response

    # return qa.run(query)
    # return query

# query_file = open("query.pkl", "rb")
# qa = pickle.load(query_file)
# query_file.close()

# query = "Create a 3-day itinerary for a group of teens that are going to go from New Jersey to New York and then spend two days in New York and are sporty people who want to attend free events in a bulleted list."
# print(qa.run(query))

if __name__ == '__main__':
  app.run(port=5000)