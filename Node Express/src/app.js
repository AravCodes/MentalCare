import express from "express"
import axios from "axios"

import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors({
    credentials:true,
    origin: '*'
}));

app.use(express.json())

// Example input data
const inputData = [
    95.730, 132.068, 91.754, 0.00551, 0.00006, 0.00293, 0.00332, 0.00880, 0.02093, 0.191, 0.01073, 0.01277, 0.01717, 0.03218, 0.01070, 21.812, 0.615551, 0.773587, -5.498678, 0.327769, 2.322511, 0.231571
];

const feature_names = [
    'MDVP:Fo(Hz)', 'MDVP:Fhi(Hz)', 'MDVP:Flo(Hz)', 'MDVP:Jitter(%)', 'MDVP:Jitter(Abs)', 'MDVP:RAP', 'MDVP:PPQ', 'Jitter:DDP', 'MDVP:Shimmer', 'MDVP:Shimmer(dB)', 'Shimmer:APQ3', 'Shimmer:APQ5', 'MDVP:APQ', 'Shimmer:DDA', 'NHR', 'HNR', 'RPDE', 'DFA', 'spread1', 'spread2', 'D2', 'PPE'
];

const input_json = Object.fromEntries(feature_names.map((feature, index) => [feature, inputData[index]]));

console.log(input_json);

// Endpoint to make predictions
app.post('/make-predictions', async (req, res) => {
    try {
        // Make a POST request to the Flask API
        const response = await axios.post('http://127.0.0.1:5000/predict', {
            data: input_json
        });

        // Get the predictions from the response data
        const prediction = response.data;

        // Send the predictions to the client
        console.log(prediction)
        res.json({ prediction });
    } catch (error) {
        // Handle errors
        console.error('Error making predictions:', error);
        res.status(500).json({ error: 'Error making predictions' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
