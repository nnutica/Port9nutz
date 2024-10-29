import React, { useState } from 'react';
import { exp1 } from '../../contents/exp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import PicExp from "../../assets/frosch.jpg";

function Exp(){
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  return (
    <div className=''>
      <div className='text-primaryTitle font-bold text-xl'>Experience</div>
      <div 
        className={`grid grid-cols-[25%_75%] px-2 py-6 ${isMouseEnter ? "bg-primaryBghover" : ""}`}
        onMouseEnter={() => setIsMouseEnter(true)}
        onMouseLeave={() => setIsMouseEnter(false)}
      >
        <div id="DatePhoto">
          <div className='text-lg'>
            <span  className={` text-lg ${isMouseEnter ? "text-primarySubcontent" : " text-primaryOnhover"}`}>2022</span>
          </div>
          <div id="photo">
            <img src={PicExp} className='w-5/6 rounded-md gap-y-1' />
          </div>
        </div>
        <div id="experience" className='flex flex-col gap-y-4'>
          <div id="etitle" className={` text-lg ${isMouseEnter ? "text-primarySubcontent" : " text-primaryOnhover"}`}>
            {exp1.title}
          </div>
          <div id="logo" className='flex gap-x-4 text-2xl'>
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faFacebook} />
          </div>
          <div className='Exdes'>{exp1.description}</div>
          <div id="badge" className='flex gap-x-3'>
            <div className={`BadgeDesign ${isMouseEnter ? "text-red-400":"text-primarybadge"}`}>Leadership</div>
            <div className={`BadgeDesign ${isMouseEnter ? "text-red-400":"text-primarybadge"}`}>Social</div>  
          </div>
        </div>   
      </div>
    </div>
  );
}

export default Exp;
