
const Button = ({label,iconURL}) => {
    return (
      <button className  = "flex justify-center items-center  gap-2 px-7 py-4 border font-monteserrat text-lg bg-coral-red rounded-full text-white border-coral-red ">
          {label}
  
          {iconURL?<img src={iconURL} className = "ml-2 rounded-full h-5 w-5"/> : null}
      </button>
    )
  }
  
  export default Button