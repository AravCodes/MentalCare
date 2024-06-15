import React, {useState} from 'react'
import { useNavLinks } from '../Constants'
import { assets } from '../assets/assets';
import DropDownMenu from './DropDownMenu';

const Nav = () => {

    const navLinks = useNavLinks();

    const [dropDownOpen, setDropDownOpen] =useState(false);

  return (
    <header className = "px-5 py-5 absolute z-10 w-full">
    <nav className = "flex items-center">
        <a href="/">
            <img src ="/src/assets/parkinson.png" alt="Logo" width={100} />
        </a>
        <ul className="flex-1 flex justify-end px-20 items-center gap-16  ">
            {navLinks.map((item)=>(
                <li key ={item.label} onClick={item.onClick ? item.onClick :null} className = "cursor-pointer max-lg:hidden">
                <a href = {item.href ? item.href : null} className = "font-montserrat leading-normal text-lg text-slate-gray " >
                    {item.label}
                </a>
                </li>
            ))}
            <li className = "cursor-pointer"  onClick = {()=>setDropDownOpen(prev=>(!prev))}>
                <img src = {assets.menu_icon} alt="Menu" width={30} className ="opacity-[40%]"/>
                {dropDownOpen ? <DropDownMenu/> : null}
            </li>
        </ul>

        
    </nav>
</header>
  )
}

export default Nav