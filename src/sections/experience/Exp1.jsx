import React, { useState } from 'react'
import { exp1 } from '../../contents/exp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import PicExp from "../../assets/frosch.jpg";


function Exp(){
  const[ismouseEnter,SetIsmouseEnter]=useState(false);




  return (
    <div className=''>
    <div className='text-primaryTitle font-bold text-xl'>Experience</div>
   <div className='grid grid-cols-[25%_75%] px-2 py-6'
   onMouseEnter={()=>SetIsmouseEnter(true)}
   onMouseLeave={()=>SetIsmouseEnter(false)}
   >
    <div id="DatePhoto">
      <div className='text-2xl'>
        <span className='text-lg'>2022</span>
        </div>
      <div id="photo">
        <img src={PicExp}  className='w-5/6 rounded-md gap-y-1'/>
      </div>
      </div>
    <div id="experience" className='flex flex-col gap-y-4'>
      <div id="etitle" className={`text-primaryTitle text-lg  ` }>{exp1.title}</div>
      <div id= "logo" className='flex gap-x-4 text-2xl'>
        <FontAwesomeIcon  icon={faGithub} />
        <FontAwesomeIcon  icon={faFacebook} />
      </div>
      <div className='Exdes'>{exp1.description}</div>
      <div id ="badge" className='flex gap-x-3'>
        <div className={`BadgeDesign ${ismouseEnter? "text-blue-400":""}`}>Leadership</div>
        <div className={`BadgeDesign ${ismouseEnter? "text-blue-400":""}`}>Social</div>  
      </div>
    </div>   
   </div>
     
   </div>




  )
}

export default Exp;