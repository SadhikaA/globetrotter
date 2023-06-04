from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS

@app.route('/api/submit-data', methods=['POST'])
def submit_data():
    data = request.get_json()
    # Process the received data
    # Perform necessary operations with the database or any other logic
    # Return a response (optional)

    # Example response:
    response = {'message': 'Data received successfully'}
    return jsonify(response), 200

if __name__ == '__main__':
    app.run()
