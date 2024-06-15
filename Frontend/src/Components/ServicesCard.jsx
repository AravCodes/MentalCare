import React from 'react'

const ServiceCard = (service) => {
  return (
    <div className ="flex flex-col items-start flex-1 sm:w-[350px] sm:min-w-[350px] px-10 py-16 gap-2 rounded-[20px]   shadow-3xl">
        <div className="flex justify-center items-center w-11 h-11 bg-coral-red rounded-full">
            <img src = {service.imgURL} alt="service" className = "object-contain"/>
        </div>
        <h3 className = "font-palanquin font-bold mt-5 text-3xl">{service.label}</h3>
        <p className = "font-montserrat text-slate-gray text-lg">{service.subtext}</p>
    </div>
    
  )
}

export default ServiceCard