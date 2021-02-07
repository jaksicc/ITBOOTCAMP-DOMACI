import { useEffect } from "react"
import { useState } from "react"
import Launches from "./components/Launches"
import Select from "./components/Select"
import { getPastLaunches } from "./service"



const App = () => {

  
  const [pastLaunches, setPastLaunches] = useState([])
  const [selectedYear, setSelectedYear] = useState()

  
  useEffect(()=>{
    getPastLaunches().then(res=>{
      setPastLaunches(res.data)
    })
  }, [])


  return (
    <>
    <h1>SpaceX</h1>
    <Select pastLaunches={pastLaunches} selectedYear={selectedYear} setSelectedYear={setSelectedYear}/>
    <hr/>
    <Launches pastLaunches={pastLaunches.filter(launch => launch.date_utc.includes(selectedYear))} />
    
    </>
  )
}

export default App
