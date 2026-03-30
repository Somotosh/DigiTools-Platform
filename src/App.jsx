import './App.css'
import Banner from './component/banner/Banner'
import MainSection from './component/MainSection/MainSection'
import Navber from './component/navber/Navber'
import StatsSection from './component/StatsSection/StatsSection'

 const getModel = async () =>{
  
    const res = await fetch('/model.json')
    return res.json()
  }

  const modelPromes = getModel()
  console.log(modelPromes)

function App() {
 

  return (
   <>
   <Navber />
   <Banner />
   <StatsSection />
   <MainSection modelPromes={modelPromes}/>
   </>
  )
}

export default App
