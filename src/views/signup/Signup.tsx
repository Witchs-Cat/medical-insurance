import React from 'react'
import { Link } from 'react-router-dom'

import '../login/Login'

import {publicRoute} from '../../components/routing/PublicRoutes/PublicRoutes'


const Signup = () => {
  return <main className='login'>
      <form className="login-form">
        <div className="login-form__header">
          <h2 className='login-form__header__title'>Создайте учетную запись!</h2>
        </div>
        <div className='login-form__container'>
          <label className="login-form__label" htmlFor="email">АДРЕС ЭЛЕКТРОНОЙ ПОЧТЫ</label>
          <input className="login-form__input" type="email" />
          <label className="login-form__label" htmlFor="email">Фамилия</label>
          <input className="login-form__input" type="text" />
          <label className="login-form__label" htmlFor="email">Имя</label>
          <input className="login-form__input" type="text" />
          <label className="login-form__label" htmlFor="email">Отчество</label>
          <input className="login-form__input" type="text" />
          <label className="login-form__label" htmlFor="email">Дата рождения</label>
          <input className="login-form__input" type="text" />
          <label className="login-form__label" htmlFor="password">ПАРОЛЬ</label>
          <input className="login-form__input" type="password" />
          <button className='login-form__button' type="submit">Зарегистрироваться</button>
        </div> 
        <div className='login__need-account'>
        <span>Уже есть аккаунт? </span>
          <Link to={publicRoute.login}>
            Войти
          </Link>
        </div>

      </form>
  </main>
}

export default Signup