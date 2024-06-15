import React from 'react'
import { useNavLinks } from '../Constants'

const Nav = () => {

    const navLinks = useNavLinks();

  return (
    <header className = "px-5 py-5 absolute z-10 w-full">
    <nav className = "flex items-center">
        <a href="/">
            <img src ="/src/assets/parkinson.png" alt="Logo" width={100} />
        </a>
        <ul className="flex-1 flex justify-end px-20 items-center gap-16 max-lg:hidden ">
            {navLinks.map((item)=>(
                <li key ={item.label} onClick={item.onClick ? item.onClick :null} className = "cursor-pointer">
                <a href = {item.href ? item.href : null} className = "font-montserrat leading-normal text-lg text-slate-gray " >
                    {item.label}
                </a>
                </li>

            ))}
        </ul>
        
    </nav>
</header>
  )
}

export default Nav