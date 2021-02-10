import { useState } from "react"
import CreateQuote from "./components/CreateQuote"
import Home from "./components/Home"
import Login from "./components/Login"
import Quotes from "./components/Quotes"
import Register from "./components/Register"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


const App = () => {

    const [user,setUser] = useState(null)

    return (

        <Router> 
            <nav>
                <Link style={{padding:5}} to="/">Home</Link>
                <Link style={{padding:5}} to="/quotes">Quotes</Link>
                <Link style={{padding:5}} to="/createquote">CreateQuote</Link>
                {
                user? 
                <>
                <span>User:{user.username}</span>
                <button onClick={()=>setUser(null)}>Logout</button>
                </>
                :
                <>
                <Link style={{padding:5}} to="/login">Login</Link>
                <Link style={{padding:5}} to="/register">Register</Link>
                </>
                }
            </nav>
            <hr></hr>
            <Switch>

                <Route path="/login">
                    <Login  setUser={setUser}/>
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/quotes">
                    <Quotes user={user}/>
                </Route>
                <Route path="/createquote">
                    <CreateQuote user={user} />
                </Route>
                <Route path="/">
                    <Home user={user}/>
                </Route>
            </Switch>
        </Router>
        
    )
}
export default App
