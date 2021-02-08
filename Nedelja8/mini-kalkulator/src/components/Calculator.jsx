import { useState } from "react"

const Calculator = () => {

    const [rezultat, setRezultat] = useState(0)
    const [inputNum, setInputNum] = useState(0)

    const [postupak, setPostupak] = useState('')


    return (
        <>
            <input type="number" disabled value={rezultat} />

            <input type="number" onChange={(e) => setInputNum(e.target.value)} />

            <button onClick={() => {
                setRezultat(prev => prev + Number(inputNum))
                setPostupak(prev => '+' + inputNum + prev) 
                
            }}>+</button>

            <button onClick={() => {
                setRezultat(prev => prev - Number(inputNum))
                setPostupak(prev => '-' + inputNum + prev)
            }}>-</button>

            <button onClick={() => {
                setRezultat(prev => prev * Number(inputNum))
                setPostupak(prev => '*' + inputNum + prev)
            }}>*</button>

            <button onClick={() => {
                setRezultat(prev => prev / Number(inputNum))
                setPostupak(prev => '/' + inputNum + prev)
            }}>/</button>
            <p>{postupak}</p>
        </>
    )
}

export default Calculator