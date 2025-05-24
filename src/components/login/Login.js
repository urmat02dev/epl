import React from 'react'
import "./Login.scss"
import { FaRegUser } from "react-icons/fa"; 
import { TbLockPassword } from "react-icons/tb";
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom'
function Login() {
  // const nav = useNavigate()
  // const handleRegisterClick = () => {
  //   nav("/signup");
  // };



  return (
    <div id='login'>
      <div className="login">
        <div className="login-left">
          <h1>Добро пожаловать</h1>
        </div>
        <div className="login-right">
          <div className="block">
            <h1>Вход в систему</h1>
            <div className="username">
                <input type="text" placeholder='Логин' />
                <FaRegUser className='user'/>
          </div>
          <div className="password">
          <input type="text" placeholder='Пароль' />
                <TbLockPassword className='pass'/>
          </div>
          <div className="btn">
            Вход
          </div>
          <Link to='/signup'> <button className="signup"> 
          Зарегистрироваться
          </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;