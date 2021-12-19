import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login({ setUsername }) {
    const navigate = useNavigate()
    const login = async () => {
        try {
            const loginResponse = await axios.post('/login', {
                username: usernameInput.current.value,
                password: passwordInput.current.value
            });
            setUsername(usernameInput.current.value);
            if(loginResponse.data.includes('Verify')){
                navigate('/verify');
            } else {
                navigate('/stuff');
            }
        } catch (error) {
            console.log(error);
        }
    }
    const usernameInput = useRef(null);
    const passwordInput = useRef(null);
    return(
        <div id='login-page'>
            <div id='login-form'></div>
            <input id='username' ref={usernameInput} placeholder="Username"></input>
            <input id='password' ref={passwordInput} placeholder="Password"></input>
            <button id='submit' onClick={login}>Submit</button>
        </div>
    )
}
export default Login;