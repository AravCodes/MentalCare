import React,{useState} from 'react'


const Accordion = ({title , description}) => {

    const [isOpen, setIsOpen] = useState(false);

    

  return (
    <div className = "p-5 rounded-[30px] border-2  ">
        <button onClick = {()=> setIsOpen(prev=>!prev)} className = "flex justify-between w-full text-slate-gray font-palanquin text-xl font-bold">
            <span className = "text-coral-red" >{title}</span>
            {/* {isOpen ?<span>-</span> : <span>+</span>} */}
            <svg
            className="fill-coral-red shrink-0 ml-8"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            >
            <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center transition duration-200 ease-out ${
                isOpen && "!rotate-180"
                }`}
            />
            <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                isOpen && "!rotate-180"
                }`}
            />
            </svg>
        </button>
        <div className = {`grid overflow-hidden transition-all duration-300 ease-out text-slate-gray text-[16px] 
        ${isOpen ? "grid-rows-[1fr] opacity-100" : " grid-rows-[0fr] opacity-0" }`}>
            <p className ="overflow-hidden pt-3">{description}</p>
        </div> 
    </div>
  )
}

export default Accordion