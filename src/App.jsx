import './App.css'
import Rightsection from './sections/rightsection/Rightsection'
import LeftSection from './sections/leftsection/Leftsection'


function App() {
  
  return (
    
      <div className=" mt-16 mx-auto max-w-6xl grid gap-y-5 lg:grid-cols-[30%_70%]">
        <LeftSection />
        <Rightsection />
        
    </div> 
       
  )
}

export default App
