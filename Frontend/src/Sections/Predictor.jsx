import React, { useState } from 'react';
import Button from '../Components/Button';

const Predictor = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      alert('Please select an audio file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      setResult(result.message);
    } catch (error) {
      console.error('Error:', error);
      setResult('An error occurred during the prediction.');
    }
  };

  return (
    <section className="max-sm:px-4 px-[10%] justify-center flex items-center">
      <div className="flex flex-col gap-5 items-center">  {/* Add items-center here */}
        <h1 className="text-slate-gray text-[40px] max-sm:text-[25px] font-montserrat font-bold">
          Upload <span className ="text-coral-red">Audio</span> Sample for Prediction
        </h1>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-row justify-center items-center gap-5 max-sm:flex-col">
            <input type="file" accept="audio/*" onChange={handleFileChange} required className="flex justify-center items-center gap-2 px-7 py-4 border font-monteserrat text-lg rounded-full text-slate-gray max-sm:px-4 max-sm:mx-auto" /> {/* Add max-sm:mx-auto here */}
            <Button type="submit" label="Predict" />
          </form>
        </div>
        <div className="font-palanquin text-2xl text-slate-gray flex flex-row justify-center items-center">
          {result && <div id="result">{result}</div>}
        </div>
      </div>
    </section>
  )
};

export default Predictor;
