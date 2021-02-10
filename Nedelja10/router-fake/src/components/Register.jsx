import { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { getUsers, postUser } from "../service"

const Register = () => {

    const [registered, setRegistered] = useState()

    // useEffect(() => {
    //     getUsers().then(res => {
    //         setRegistered(res.data)
    //     })
    // }, [])


    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let history2 = useHistory()

    const isValid = (username, email, password) => {
        if (username.length >= 4 && email.includes('@') && email.includes('.') && password.length >= 8) 
            return true
    }

    return (
        <div>
            <div>
                <label htmlFor="username">Username:</label>
                <input value={username} name="username" type="text" placeholder="username..." onChange={(e) => setUsername(e.target.value)} />
            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <input value={email} name="email" type="text" placeholder="email..." onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input value={password} name="password" type="password" placeholder="password..." onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button onClick={() => {
                getUsers().then(res => {
                    let userExists = res.data.find(el => el.username == username || el.email == email)
                    if (userExists) {
                        window.alert('Username and email allready taken')
                    }
                    else if (isValid(username, email, password)) {
                        postUser( username, email, password )
                        setUsername('')
                        setEmail('')
                        setPassword('')
                        window.alert('Successfully registered')
                        
                    }
                    else{
                        window.alert('Username, email , or password ar not valid')
                    }
                })
                
            }}>Register</button>

        </div>
    )
}

export default Register