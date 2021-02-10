import { useEffect, useState } from "react"
import { Redirect } from "react-router"
import { getQuotes, postUser } from "../service"
import Quote from "./Quote"

const Quotes = ({user}) => {

    const[quotes, setQuotes] = useState([])
    
    useEffect(()=>{
        getQuotes().then(res=>{
            setQuotes(res.data)
        })
    },[])
    

    return (
        <>
        {user?
        quotes.map(quote => <Quote key={quote.id} quote={quote}/>)
        :
        <Redirect to='/login' />
        }
        </>
    )
}

export default Quotes