import './App.css'
import LeftSection from './sections/leftsection/Leftsection'
import Rightsection from './sections/rightsection/Rightsection'


function App() {
  
  return (
    
      <div className=" mt-16 mx-auto max-w-6xl grid grid-cols-[30%_70%]">
        <LeftSection />
        <Rightsection />
        
    </div> 
       
  )
}

export default App
