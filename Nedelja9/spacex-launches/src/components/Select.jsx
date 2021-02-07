

const Select = ({pastLaunches, selectedYear, setSelectedYear}) => {

    

    let opcije = Array.from(new Set(pastLaunches.map(launch => launch.date_utc.slice(0,4))))

    return (
        <>
        <select onChange={(e)=>setSelectedYear(e.target.value)}>
            <option value="-1" disabled>Izaberite godinu</option>
            {opcije.map(el=> <option key={el}>{el}</option>)}
        </select>
        </>
    )
}

export default Select