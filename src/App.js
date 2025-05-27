
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import { Signup } from './components/sign-up/Signup';
import Odometr from './components/pdf/Odometr';

function App() {
  return (
    <div className="App">
      
      <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/metr" element={<Odometr />} />

      </Routes>
    </div>
  );
}

export default App;
