import { useState } from "react"
import { Link, Redirect, useHistory } from "react-router-dom"
import { getUsers } from "../service"




const Login = ({setUser}) => {

    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')

    const [users, setUsers] = useState([])

    let history = useHistory()

    // const isValidUser = (username,password) =>{
    //    let ulogovan = users.find(user => user.username == username && user.password == password)
    //    return ulogovan
        
    // }
    
    return (
        <>
        <div>
        <label htmlFor="username">Username:</label>
        <input name="username" type="text" placeholder="username..." onChange={(e)=> setUsername(e.target.value)}/>
        </div>

        <div>
        <label htmlFor="password">Password:</label>
        <input name="password" type="password" placeholder="password..." onChange={(e)=> setPassword(e.target.value)}/>
        </div>

        <button onClick={()=>{
            getUsers().then(res => {
                let user = res.data.find(el => el.username === username && el.password === password)
                if(user){
                    setUser(user)
                    history.push('/quotes')
                }
                else{
                    window.alert("Niste registrovani")
                }
            })
            
        }}>Login</button>
        
        <hr/>
        <Link style={{padding:5}} to="/register">Register</Link>
        </>
    )
}

export default Login