import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

function Register() {
    const navigate = useNavigate()
    const register = async () => {
        try {
            await axios.post('/register', {
                username: usernameInput.current.value,
                password: passwordInput.current.value
            });
            navigate('/login');
        } catch (error) {
            console.log(error);
        }
    }
    const usernameInput = useRef(null);
    const passwordInput = useRef(null);
    return(
        <div id='register-page'>
            <div id='register-form'></div>
            <input id='username' ref={usernameInput} placeholder="Username"></input>
            <input id='password' ref={passwordInput} placeholder="Password"></input>
            <button id='submit' onClick={register}>Submit</button>
        </div>
    )
}
export default Register;