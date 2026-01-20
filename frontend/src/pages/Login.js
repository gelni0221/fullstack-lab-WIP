import './Login.css'
import {useState} from 'react';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        const value = e.target.value;
        setUsername(value)
    }
    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value)
    }

    const handleSubmit = () => {
        
    }

    return(
        <div className="container">
            <div className="main_content">

            </div>
            <div className="side_container">
            <form className='login_form'>
                <input type='text' placeholder='Username' className="input_login" value={username} onChange={handleUsernameChange}></input>
                <input type='text' placeholder='Password' className="input_login" value={password} onChange={handlePasswordChange}></input>
                <button className="button_login">Login</button>
                <a href="">Forgot Password?</a>
                <button className="button_create_account">Create new Account</button>
            </form>
            </div>
        </div>
    );
}