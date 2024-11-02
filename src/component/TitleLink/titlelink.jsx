import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
function Titlelink({ ishighlight, title, link, isMouseEnter }) {
    if (!link) {
      return (
        <div
          id="etitle"
          className={`text-lg ${ishighlight ? "text-primarySubcontent" : "text-primaryOnhover"}`}
        >
          {title}
        </div>
      );
    }
  
    return (
      <div
        id="etitle"
        className={`text-lg ${ishighlight ? "text-primarySubcontent" : "text-primaryOnhover"}`}
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title}
          <FontAwesomeIcon
            className={`text-xs -rotate-45 duration-300 ease-out ${ishighlight ? "translate-x-1 -translate-y-1" : ""}`}
            icon={faArrowRight}
          />
        </a>
      </div>
    );
  }
  
  export default Titlelink;