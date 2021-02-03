import { useState } from "react"
import { getPastLaunches } from "./service"

const App = () => {
  const [pastLaunches, setPastLaunches] = useState([])

  const [selectedYear, setSelectedYear] = useState()

  let godine = pastLaunches.map(el=> (el.date_utc).slice(0,4))
  console.log(godine)
  godine = new Set(godine)
  console.log(godine)
  

  console.log(pastLaunches)
  return (
    <>
    <h1>SpaceX</h1>
    <button onClick={()=>getPastLaunches().then(res=>{
      setPastLaunches(res.data)
    })}>Past Launches</button>
    <select onChange={(e)=>setSelectedYear(e.target.value)}>
     
      <option value='-1' default>Izaberite godinu</option>
      {godine.forEach(el=><option value={el}>{el}</option>)}
    </select>
    <hr/>
    {pastLaunches.map(el=><img alt={el.name}src={el.links.patch.small} key={el.id}></img>)}
    </>
  )
}

export default App
