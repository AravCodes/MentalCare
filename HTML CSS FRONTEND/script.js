document.getElementById("test").addEventListener('click', async () => {
    try {
        const response = await fetch('http://localhost:3000/make-predictions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({}) // Empty request body since no data is being sent
        });

        if (response.ok) {
            const data = await response.json(); // Parse response JSON
            console.log(data.prediction.message); // Access the message field
            // Do something with the prediction message
            const predictionMessage = document.createElement("h1");
            predictionMessage.textContent = data.prediction.message;
            predictionMessage.classList.add("container")
            document.body.appendChild(predictionMessage)
            
        } else {
            console.log("Prediction failed");
        }
    } catch (error) {
        console.error("Error:", error);
    }
});
