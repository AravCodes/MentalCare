import React from 'react'
import Accordion from './Accordion'

import { useContext } from 'react';
import { Context } from '../context/Context';



const NewsDropdown = ({title,description}) => {

  const {recentStudiesClicked} = useContext(Context);

  return (
    <section>
      <div id="dropdown" className = {`grid overflow-hidden transition-all duration-300 ease-out text-slate-gray text-[16px] 
      ${recentStudiesClicked ? " opacity-100" : " grid-rows-[0fr] opacity-0" }`}>
        <div className = "p-3  rounded-lg  ">
          <Accordion title = {title}   description = {description}/>
        </div>

      </div>
    </section>
  )
}



export default NewsDropdown