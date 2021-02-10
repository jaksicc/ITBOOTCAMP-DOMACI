import { useState } from "react"
import { Redirect } from "react-router"
import { postQuotes } from "../service"

const CreateQuote = ({user}) => {

    const[createdquote, setCreatedQuote] = useState('')
    const[author, setAuthor] = useState('')
    
    return (
        user?
        <>
        <div>
        <textarea  value={createdquote} cols="30" rows="10" placeholder="Quote..." onChange={(e)=>setCreatedQuote(e.target.value)}></textarea>
        </div>
        <input value={author} type="text" placeholder="Author..." onChange={(e)=> setAuthor(e.target.value)}/>
        <button onClick={()=>{
            postQuotes({text:createdquote,author:author})
            setCreatedQuote('')
            setAuthor('')
        }}>Add quote</button>
        </>
        :
        <Redirect to='/login' />
    )
}

export default CreateQuote