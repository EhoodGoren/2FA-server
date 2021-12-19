import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Stuff from './Stuff';
import SetUpTwoFA from './SetUpTwoFA';
import VerifyTwoFA from './VerifyTwoFA';

function App() {
  const [username, setUsername] = useState();
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login setUsername={setUsername} />} />
        <Route path='/twoFA' element={<SetUpTwoFA username={username} />} />
        <Route path='/verify' element={<VerifyTwoFA username={username} />} />
        <Route path='/stuff' element={<Stuff />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
