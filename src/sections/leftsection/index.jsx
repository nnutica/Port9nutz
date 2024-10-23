import Contact from "../contact";
import Header from "../Header";
import Navbar from "../Navbar";

const  LeftSection =()=>{
    return(
        <div>
          <div className='sticky top-14 grid grid-rows-[40%-40%-20%] h-[90vh]'>
          <Header />
          <Navbar />
          <Contact />
        </div>
        </div>
    )
}

export default LeftSection;