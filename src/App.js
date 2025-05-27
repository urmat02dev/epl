
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';

import Odometr from './components/pdf/Odometr';
import SignUp from './components/sign-up/SignUp';

function App() {
  return (
    <div className="App">
      
      <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/sign-up" element={<SignUp/>} />
      <Route path="/metr" element={<Odometr />} />

      </Routes>
    </div>
  );
}

export default App;
