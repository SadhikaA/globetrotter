from flask import Flask, jsonify, request
from flask_cors import CORS
import openai

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['POST'])
def submit_data():
    data = request.get_json()
    trip= data.get('trip')
    country = data.get('country')
    print(country)
    openai.api_key = ""
    # Process the received data
    # # Perform necessary operations with the database or any other logic
    # Example response:
    response_data = {'message': country}
    response = jsonify(response_data)
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
    return response, 200

if __name__ == '__main__':
    app.run(port=5000)