
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import { Signup } from './components/sign-up/Signup';

function App() {
  return (
    <div className="App">
      <Login/>
      <Routes>
      <Route path="/sign-up" element={<Signup />} />

      </Routes>
    </div>
  );
}

export default App;
