import { useEffect, useState } from "react";
import axios from 'axios';

function SetUpTwoFA({ username }) {
    const [link, setLink] = useState('');
    useEffect( () => {
        if(!username) return
        const a = async () => {
            const postReponse = await axios.post('/twofa', { username });
            setLink(postReponse.data);
        }
        a();
    },[username])
    return (
        <a href={link}>{link}</a>
    )
}

export default SetUpTwoFA;