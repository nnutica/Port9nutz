import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { data } from '../../contents/header';
const Header = () =>{
    return(  
        <div className='flex flex-col gap-2'>
          <div className='text-3xl text-primaryTitle font-semibold'>{data.name}</div>
          <div className='text-Content font-semibold'>{data.title}</div>
          <div className='text-sm w-5/6 text-primarySubcontent'>{data.caption}</div>
          <div className='mt-4'>
            <a href={data.link} target='blank'>
                <span className='rounded-md bg-primaryAccent text-gray-300 py-2 px-5'>
                {data.btnText}
                <span className='"rotate-90 inline-block ml-2 text-sm' ><FontAwesomeIcon  className="animate-bounce"  icon={faArrowLeft}/></span>
                </span>
            </a>
            </div>
        </div>
        
    )
}

export default Header;