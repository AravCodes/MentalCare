import os
import tempfile
import pickle
import re
import pandas as pd
import parselmouth
from flask import Flask, request, jsonify
import numpy as np
import joblib
from sklearn.preprocessing import StandardScaler
from sklearn.utils.validation import check_is_fitted
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, resources={"/predict": {"origins": "*"}})  # Apply CORS configuration to the specific endpoint

# Load the trained model
model = joblib.load('flask/model_pickle')

# Initialize the scaler
scaler = joblib.load('flask/scaler.pkl')
check_is_fitted(scaler)  # Raises error if scaler is not fitted



@app.route('/predict', methods=['POST'])
@cross_origin(origins="*")  # Allow all origins for this route
def extract_audio_features(audio_file_path):
    ile = request.files['file']
    sound = parselmouth.Sound(audio_file_path)
    pitch = sound.to_pitch()
    pulses = parselmouth.praat.call([sound, pitch], "To PointProcess (cc)")
    voice_report_str = parselmouth.praat.call([sound, pitch, pulses], "Voice report", 0.0, 0.0, 75, 600, 1.3, 1.6, 0.03, 0.45)

    s = re.findall(r'-?\d+.?\d*', voice_report_str)

    # Extract the specific features in the required order
    row = [
        '1', s[21], s[22]+'E'+s[23], s[24], s[26], s[27], s[28], s[29],
        s[31], s[33], s[35], s[36], s[37], s[38], s[39], s[3], s[4],
        s[5], s[6], s[7], s[8], s[9], s[10]+'E'+s[11], s[12]+'E'+s[13]
    ]

    print(row)

    return row

# def predict():
#     # Get the file from the request
#     file = request.files['file']

#     # Save the file to a temporary location
#     with tempfile.NamedTemporaryFile(delete=False) as temp_file:
#         file.save(temp_file.name)
#         temp_file_path = temp_file.name

#     try:
#         # Extract features from the audio file
#         audio_features = extract_audio_features(temp_file_path)

#         # Convert features to numpy array, reshape, and standardize
#         input_data_numpy = np.asarray(audio_features, dtype=np.float64)
#         input_data_reshape = input_data_numpy.reshape(1, -1)

#         # Check if the scaler has been fitted
#         if not hasattr(scaler, 'scale_'):
#             raise Exception("Scaler is not fitted yet. Please fit the scaler before using it")

#         # Standardize the input data
#         std_data = scaler.transform(input_data_reshape)

#         # Make prediction
#         prediction = model.predict(std_data)

#         # Print prediction result
#         if prediction[0] == 1:
#             message = 'The patient has Parkinson'
#         elif prediction[0] == 0:
#             message = 'The patient does not have Parkinson'
#         else:
#             message = 'Some error in processing'

#     finally:
#         # Clean up the temporary file
#         os.remove(temp_file_path)

#     # Return JSON response
#     return jsonify({'message': message})

if __name__ == '__main__':
    app.run(debug=True)
