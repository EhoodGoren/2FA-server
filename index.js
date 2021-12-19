const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const twofactor = require('node-2fa');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors())

const users = [];
const saltRounds = 10;
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    if(!username || !password) return res.status(400).send('Missing username or password');
    const encryptedPassword = await bcrypt.hash(password, saltRounds);
    users.push({username, password: encryptedPassword});
    return res.status(200).send('Registered successfully'); 
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const matchingUser = users.find(user => user.username === username);
    if(!matchingUser) return res.status(404).send('Cant find user');
    const passwordCheck = await bcrypt.compare(password, matchingUser.password);
    if(!passwordCheck) return res.status(400).send('password doesnt match');
    if(!matchingUser.token){
        return res.status(200).send('Logged in successfully');
    } else {
        return res.status(200).send('Verify');
    }
})

app.post('/twofa', (req, res) => {
    const { username } = req.body;
    const userSecret = twofactor.generateSecret({ name: "2FA App", account: username })
    // const userToken = twofactor.generateToken(userSecret.secret);
    users.map(user => {
        if(user.username === username) {
            user.token = userSecret.secret;
        }
    })
    res.send(userSecret.qr);
})

app.post('/verify', (req, res) => {
    const { token, username } = req.body;
    const matchingUser = users.find(user => user.username === username);
    const verifyTwoFA = twofactor.verifyToken(matchingUser.token, token);
    return verifyTwoFA ?
        res.status(200).send('Logged in successfully') :
        res.status(401).send('Invalid code');
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
