import React, {useState} from 'react'
import { useNavLinks } from '../Constants'
import { assets } from '../assets/assets';
import DropDownMenu from './DropDownMenu';
import FlyOutMenu from './FlyOutMenu';

const Nav = () => {

    const navLinks = useNavLinks();

    const [dropDownOpen, setDropDownOpen] =useState(false);

    const [hovering, setHovering] =useState(null);

  return (
    <header className = "px-5 py-5 absolute z-10 w-full">
    <nav className = "flex items-center">
        <a href="/">
            <img src ="/src/assets/parkinson.png" alt="Logo" width={100} />
        </a>
        <ul 
        className="flex-1 flex justify-end px-20 items-center gap-16 ">
            {navLinks.map((item)=>(
                <li key ={item.label} onClick={item.onClick ? item.onClick :null} className = "cursor-pointer max-lg:hidden relative w-fit h-fit"
                onMouseEnter={()=> setHovering(item.label)}
                onMouseLeave={()=> setHovering(null)}>
                <a href = {item.href ? item.href : null} className = "font-montserrat leading-normal text-lg text-slate-gray " >
                    {item.label}
                </a>
                <span 
                style={{
                    transform: hovering === item.label ? "scaleX(1)" : "scaleX(0)"
                }}
                className = "absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-coral-red transition-transform duration-300 ease-out"></span>
                </li>
            ))}
            <li className = "cursor-pointer"  onClick = {()=>setDropDownOpen(prev=>(!prev))}>
                <img src = {assets.menu_icon} alt="Menu" width={30} className ="opacity-[40%]"/>
                {dropDownOpen ? <DropDownMenu/> : null}
                <FlyOutMenu/>
            </li>
        </ul>

        
    </nav>
</header>
  )
}

export default Nav