import React from 'react'

const Information = () => {
  return (
    <section className = "px-10 max-sm:px-5  flex justify-between items-center">
      <div className = "flex flex-1 flex-col gap-5  ">
        <h3 className = "text-4xl font-palanquin font-bold text-slate-gray"> Information </h3>
        <h1 className = "font-montserrat font-bold text-lg text-coral-red"> What is Parkinson's Disease?</h1>
        <p className = "font-montserrat text-slate-gray">Parkinson's disease is a progressive neurodegenerative disorder that affects movement. It occurs due to the loss of dopamine-producing neurons in a part of the brain called the substantia nigra. Dopamine is a neurotransmitter that plays a key role in sending messages to the part of the brain that controls movement and coordination.</p>

        <h1 className = "font-montserrat font-bold text-lg text-coral-red"> Symptoms of Parkinson's Disease</h1>
        <p className = "font-montserrat text-slate-gray">The symptoms of Parkinson's disease can vary from person to person, but the primary symptoms include:</p>


        <ul className = "py-2 flex flex-col gap-2 text-slate-gray">
          <li><span className = "font-bold text-slate-gray">*Tremor</span>: Shaking, usually starting in a limb, often the hand or fingers.</li>
          <li><span className = "font-bold text-slate-gray">*Bradykinesia</span>: Slowness of movement, making simple tasks difficult and time-consuming.</li>
          <li><span className = "font-bold text-slate-gray">*Rigidity</span>: Stiffness of the limbs and trunk, which can limit range of motion and cause pain.</li>
          <li><span className = "font-bold text-slate-gray">*Postural Instability</span>: Impaired balance and coordination, leading to a tendency to fall.</li>
          <li><span className = "font-bold text-slate-gray">*Speech changes</span></li>
          <li><span className = "font-bold text-slate-gray">*Writing changes</span></li>
          <li><span className = "font-bold text-slate-gray">*Difficulty with automatic movements</span></li>
          <li><span className = "font-bold text-slate-gray">*Muscle cramps and pain</span></li> 
        </ul>

        <h1 className = "font-montserrat font-bold text-lg text-coral-red"> Diagnosis and Treatment

</h1>
        <p className = "font-montserrat text-slate-gray">
          There is no specific test for Parkinson's disease. Diagnosis is based on medical history, a review of signs and symptoms, and neurological and physical examinations. Imaging tests such as MRI or PET scans may be used to rule out other conditions.

          While there is no cure for Parkinson's disease, treatments can help manage symptoms. These may include:</p>

          <ul className = "py-2 flex flex-col gap-2 font-montserrat text-slate-gray">
          <li><span className = "font-bold text-slate-gray">*Medications</span> : To increase or substitute for dopamine.</li>
          <li><span className = "font-bold text-slate-gray">*Surgical treatments</span>: Such as deep brain stimulation (DBS).</li>
          <li><span className = "font-bold text-slate-gray">*Lifestyle changes </span>: Including exercise, physical therapy, and a healthy diet.</li>
          </ul>
  


      </div>


      {/* image */}
      <div className = "max-w-[760px] max-lg:hidden">
        <img src= "./woman.png"/>
      </div>
    </section>
  )
}

export default Information