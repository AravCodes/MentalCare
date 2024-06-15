import React from 'react'

const Instructions = () => {
  return (
    <section className = "px-10 max-sm:px-5  flex justify-between items-center">
      <div className = "flex flex-1 flex-col gap-5  ">
        <h3 className = "text-4xl font-montserrat font-bold text-slate-gray text-center"> Instructions </h3>
        <ul className = "flex flex-col gap-5 pt-0 px-[10%] text-slate-gray">
          <li><span className = "font-palanquin font-bold md:text-lg ">*Record Your Voice:</span> Use a quiet environment and a device with a microphone to record a short voice sample of you saying "AAAA" sustaining it for about 1- seconds.</li>
          <li><span className = "font-palanquin font-bold md:text-lg ">*Save Your Recording:</span> Save the audio file in a compatible format (e.g., MP3, WAV) on your device.</li>
          <li><span className = "font-palanquin font-bold md:text-lg ">*Upload Your File:</span> Click the "Choose file" button to select the audio file from your device.</li>
          
        </ul>

        <div className ="px-[10%]">
          <h2 className = "font-montserrat text-2xl text-coral-red font-bold mt-5 "> Important Note: </h2>

          <p className = "pt-3 text-lg font-montserrat text-slate-gray"> This tool is intended for informational purposes only and should not replace professional medical advice. If you have any concerns about your health, please consult a healthcare provider.</p>

        </div>
      </div>
    </section>
  )
}

export default Instructions