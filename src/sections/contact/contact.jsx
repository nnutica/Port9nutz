import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact=()=>{
    return(
        <div className='flex items-end pd-5 gap-4 text-3xl '>
          <FontAwesomeIcon className='hover:scale-150 hover:text-primaryBase transition-all' icon={faGithub} />
          <FontAwesomeIcon className='hover:scale-150 hover:text-primaryBase transition-all' icon={faLinkedin} />
          <FontAwesomeIcon className='hover:scale-150 hover:text-primaryBase transition-all' icon={faInstagram} />
        </div>
    )
}

export default Contact;
