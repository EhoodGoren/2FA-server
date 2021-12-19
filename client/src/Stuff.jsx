import { useNavigate } from 'react-router-dom';

function Stuff() {
    const navigate = useNavigate()
    const twoFA = () => {
        navigate('/twoFA');
    }
    return (
        <div>
            <h1>This is the app. Wow!</h1>
            <button onClick={twoFA}>2FA</button>
        </div>
    )
}

export default Stuff;
