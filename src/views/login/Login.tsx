import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

import {publicRoute} from '../../components/routing/PublicRoutes/PublicRoutes'


const Login : React.FC = () => {
  return <main className='login'>
      <form className="login-form">
        <div className="login-form__header">
          <h2 className='login-form__header__title'>C Возвращением!</h2>
          <p className='login-form__header__subtitle'>Мы рады видеть вас вновь!</p>
        </div>

        <div className='login-form__container'>
          <label className="login-form__label" htmlFor="email">АДРЕС ЭЛЕКТРОНОЙ ПОЧТЫ</label>
          <input className="login-form__input" type="email" />
          <label className="login-form__label" htmlFor="password">ПАРОЛЬ</label>
          <input className="login-form__input" type="password" />
          <button className='login-form__button' type="submit">Войти</button>
        </div> 

        <div className='login__need-account'>
        <span>Нужен новый аккаунт? </span>
          <Link to={publicRoute.signup}>
            зарегистрироваться
          </Link>
        </div>

      </form>
  </main>
}

export default Login