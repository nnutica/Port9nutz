import Contact from "../contact/contact";
import Header from "../Header/header";
import Navbar from "../Navbar/navbar";

const  LeftSection =()=>{
    return(
        <div className="px-3">
          <div className='sticky top-14 grid gap-y-5 lg:grid-rows-[20%-30%-50%] lg:h-[90vh]'>
          <Header />
          <Navbar />
          <Contact />
        </div>
        </div>
    )
}

export default LeftSection;