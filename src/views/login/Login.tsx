import React, {useState, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './login.css'

import {publicRoute} from '../../components/routing/PublicRoutes/PublicRoutes'
import { useAppStore } from '../../components/context/StoreContext'

interface ILoginForm {
  email: string,
  password: string
}

const Login : React.FC = () => {
  const store = useAppStore()
  const navigate = useNavigate()

  const [exceptionMessage, setExceptionMessage] = useState<string>()
  const [form, setForm] = useState<ILoginForm>({email:"",password:""})

  const onFormChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    let newForm = form;
    newForm[e.target.id as keyof ILoginForm] = e.target.value
    setForm(newForm);
  }

  const onSubmit = (e:React.FormEvent) => {
    e.preventDefault()
    store.loginAsync(form.email, form.password)
      .then(()=> {
        navigate(publicRoute.home)
      }, (exeption)=>{
        console.log(exeption);
        setExceptionMessage(exeption.response?.data?.message  ?? "неизвестная ошибка")
      })
  }

  return <main className='login'>
      <form className="login-form" onSubmit={onSubmit} onChange={onFormChange}>
        <div className="login-form__header">
          <h2 className='login-form__header__title'>C Возвращением!</h2>
          <p className='login-form__header__subtitle'>Мы рады видеть вас вновь!</p>
        </div>

        <div className='login-form__container'>
          <label className="login-form__label" htmlFor="email">АДРЕС ЭЛЕКТРОНОЙ ПОЧТЫ</label>
          <input className="login-form__input" autoComplete="email" type="email" id="email" required/>
          <label className="login-form__label" htmlFor="password">ПАРОЛЬ</label>
          <input className="login-form__input" autoComplete="password" type="password" id="password" required/>
          <label className='login__exception'>{exceptionMessage}</label>
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