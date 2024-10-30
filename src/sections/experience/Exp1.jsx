import React, { useState } from 'react';
import { exp1 } from '../../contents/exp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import PicExp from "../../assets/frosch.jpg";

function Exp(){
  const [isMouseEnter, setIsMouseEnter] = useState({});

  return (
    <div className=''>
      <div className='text-primaryTitle font-bold text-xl'>Experience</div>
      <div 
        className={`grid grid-cols-[25%_75%] px-2 py-6 ${isMouseEnter['exp1'] ? "bg-primaryBghover" : ""}`}
        onMouseEnter={() => setIsMouseEnter({'exp1':true})}
        onMouseLeave={() => setIsMouseEnter({'exp1':false})}
      >
        <div id="DatePhoto">
          <div className='text-lg'>
            <span  className={` text-lg ${isMouseEnter['exp1'] ? "text-primarySubcontent" : " text-primaryOnhover"}`}>2022</span>
          </div>
          <div id="photo">
            <img src={PicExp} className='w-5/6 rounded-md gap-y-1' />
          </div>
        </div>
        <div id="experience" className='flex flex-col gap-y-4'>
          <div id="etitle" className={` text-lg ${isMouseEnter['exp1'] ? "text-primarySubcontent" : " text-primaryOnhover"}`}>
            {exp1.title}
          </div>
          <div id="logo" className='flex gap-x-4 text-2xl'>
            <FontAwesomeIcon icon={faGithub} />
            <a href='https://www.linkedin.com/in/nitinat-loruthai-273497328/' target='blank'><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
          <div className='Exdes'>{exp1.description}</div>
          <div id="badge" className='flex gap-x-3'>
            <div className={`BadgeDesign ${isMouseEnter['exp1'] ? "text-red-400":"text-primarybadge"}`}>Leadership</div>
            <div className={`BadgeDesign ${isMouseEnter['exp1'] ? "text-red-400":"text-primarybadge"}`}>Social</div>  
          </div>
        </div>   
      </div>

      <div 
        className={`grid grid-cols-[25%_75%] px-2 py-6 ${isMouseEnter['exp2'] ? "bg-primaryBghover" : ""}`}
        onMouseEnter={() => setIsMouseEnter({'exp2':true})}
        onMouseLeave={() => setIsMouseEnter({'exp2':false})}
      >
        <div id="DatePhoto">
          <div className='text-lg'>
            <span  className={` text-lg ${isMouseEnter['exp2'] ? "text-primarySubcontent" : " text-primaryOnhover"}`}>2022</span>
          </div>
          <div id="photo">
            <img src={PicExp} className='w-5/6 rounded-md gap-y-1' />
          </div>
        </div>
        <div id="experience" className='flex flex-col gap-y-4'>
          <div id="etitle" className={` text-lg ${isMouseEnter['exp2'] ? "text-primarySubcontent" : " text-primaryOnhover"}`}>
            {exp1.title}
          </div>
          <div id="logo" className='flex gap-x-4 text-2xl'>
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faFacebook} />
          </div>
          <div className='Exdes'>{exp1.description}</div>
          <div id="badge" className='flex gap-x-3'>
            <div className={`BadgeDesign ${isMouseEnter['exp2'] ? "text-red-400":"text-primarybadge"}`}>Leadership</div>
            <div className={`BadgeDesign ${isMouseEnter['exp2'] ? "text-red-400":"text-primarybadge"}`}>Social</div>  
          </div>
        </div>   
      </div>
    </div>
  );
}

export default Exp;
