import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Stuff from './Stuff';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/stuff' element={<Stuff />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
