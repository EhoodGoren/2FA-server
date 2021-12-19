import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function VerifyTwoFA({ username }) {
    const codeInput = useRef(null);
    const navigate = useNavigate()
    const submit = async () => {
        try {
            await axios.post('/verify', {username, token: codeInput.current.value});
            navigate('/stuff');
        } catch (error) {
            alert('Invalid code. Try again');
        }
    }
    return (
        <div>
            <input ref={codeInput} placeholder='Code here'></input>
            <button onClick={submit}>Submit</button>
        </div>
    )
}

export default VerifyTwoFA;
