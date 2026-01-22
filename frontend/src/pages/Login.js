import './Login.css'
import {useState} from 'react';
const URL = process.env.REACT_APP_API_URL

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (e) => {
        const value = e.target.value;
        setUsername(value)
    }
    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${URL}/auth/api/v1/login`,{
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({username, password})
        });
        const data = await response.json();
        if(response.ok){
        console.log("Login Successful", data)
        }
        else{
        console.log("Login Failed", data.error)
        }
    };

    return(
        <div className="container">
            <div className="main_content">

            </div>
            <div className="side_container">
            <form className='login_form' onSubmit={handleSubmit}>
                <input type='text' placeholder='Username' className="input_login" value={username} onChange={handleUsernameChange}></input>
                <input type='password' placeholder='Password' className="input_login" value={password} onChange={handlePasswordChange}></input>
                <button className="button_login" type='submit'>Login</button>
                <a href="">Forgot Password?</a>
                <button className="button_create_account" type='button'>Create new Account</button>
            </form>
            </div>
        </div>
    );
}