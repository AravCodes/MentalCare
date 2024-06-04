from flask import Flask, request, jsonify
import numpy as np
import joblib
import json
from sklearn.preprocessing import StandardScaler
from sklearn.utils.validation import check_is_fitted
from flask_cors import CORS  # Import Flask-CORS for CORS configuration

app = Flask(__name__)
CORS(app)  # Apply CORS configuration to the entire app

# Load the trained model
model = joblib.load('flask/model_pickle')

# Initialize the scaler
scaler = joblib.load('flask/scaler.pkl')
check_is_fitted(scaler)  # Raises error if scaler is not fitted

def json_to_tuple(json_data):
    # Extract the inner dictionary containing the data
    data_dict = json_data.get('data', {})

    # Get the values and construct a tuple
    values_tuple = tuple(data_dict.values())

    return values_tuple

# Define a route for the prediction endpoint
@app.route('/predict', methods=['POST'])
def predict():
    # Get the JSON data from the request
    data = request.json

    # Get the values and construct a tuple
    input_data = json_to_tuple(data)

    # Convert input data to numpy array, reshape, and standardize
    input_data_numpy = np.asarray(input_data)
    input_data_reshape = input_data_numpy.reshape(1, -1)

    # Check if the scaler has been fitted
    if scaler.scale_ is None:
        raise Exception("Scaler is not fitted yet. Please fit the scaler before using it")

    # Standardize the input data
    std_data = scaler.transform(input_data_reshape)

    # Make prediction
    prediction = model.predict(std_data)

    # Print prediction result
    if prediction[0] == 1:
        message = 'The patient has Parkinson'
    elif prediction[0] == 0:
        message = 'The patient does not have Parkinson'
    else:
        message = 'Some error in processing'

    # Return JSON response
    return jsonify({'message': message})

# Define a route for the health check endpoint (if needed)

if __name__ == '__main__':
    app.run(debug=True)
