import React from 'react'
import Accordion from './Accordion'

import { useContext } from 'react';
import { Context } from '../context/Context';



const NewsDropdown = ({title,description}) => {

  const {recentStudiesClicked} = useContext(Context);

  return (
    <section>
        {recentStudiesClicked ? <div className = "p-3  rounded-lg  ">
          <Accordion title = {title}   description = {description}/>
        </div> : null }
        

    </section>
  )
}



export default NewsDropdown