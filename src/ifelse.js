import React, { useState } from "react";
import './App.css';
export default function Login(){
    const [user, setUser] = useState("")
    const [Password, setPassword] = useState("")
    const [errror, setErr] = useState(false)
    const [pasEr,setpasEr]=useState(false)
    function loginHandle(e){

        if (user.length<=3 || Password.length<=3) {
            alert("Not Valid")
        } else {
            alert("AllGood")
        }
        e.preventDefault()
    }
    function userHandler(e){
        let item = e.target.value;
        if (item.length <= 3) {
            setErr(true)
        }
        else {
            setErr(false)
        }
        setUser(item)
    }
    function PasswordHandler(e){
        let item = e.target.value;
        if (item.length <= 3) {
            setpasEr(true)
        }
        else {
            setpasEr(false)
        }
        setPassword(item)
    }
    return(
        <div className="App">
            <form onSubmit={loginHandle}>
                <h1>Login</h1>
                <input type="text" placeholder="Enter your Id" onChange={userHandler} />{errror?<span>User Not Valid</span>:""}<br /><br />
                <input type="text" placeholder="Enter your Password" onChange={PasswordHandler} />{pasEr ? <span>Password Not Valid</span> : ""}<br /><br />

                <button type="submit">Login</button>
            </form>
        </div>
    )
}







/*export default function Profile() {
    const [login,setLogin]=useState(3)
    return(
        <div className="App">
            {login == 1 ? <h1>Welcome Sahil</h1> : login == 2 ? <h1>Welcome Ram</h1> : <h1>Welcome Guest</h1>}
        </div>
    )
} */