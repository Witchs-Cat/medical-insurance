import React, {useState, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'

import '../login/Login'

import {publicRoute} from '../../components/routing/PublicRoutes/PublicRoutes'
import {Context} from '../../components/context/StoreContext'

interface ISignupForm {
  email:string
  lastName: string,
  firstName: string,
  middleName?: string,
  birthday: string,
  password: string,
}

const Signup = () => {
  const {store} = useContext(Context)
  const navigate = useNavigate();
  const [form, setForm] = useState({} as ISignupForm)

  const onFormChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    let newForm = form;
    newForm[e.target.id as keyof ISignupForm] = e.target.value
    setForm(newForm);
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const name = form.firstName+" "+form.lastName+" "+(form.middleName??"")
    store.registrationAsync(form.email, form.password, name, new Date(Date.parse(form.birthday)))
      .then(()=> {
        navigate(publicRoute.home)
      }, (exeption)=>{
        console.log(exeption)
      })
  }

  return <main className='login'>
      <form className="login-form" onSubmit={onSubmit} onChange={onFormChange}>
        <div className="login-form__header">
          <h2 className='login-form__header__title'>Создайте учетную запись!</h2>
        </div>
        <div className='login-form__container'>
          <label className="login-form__label" htmlFor="email">АДРЕС ЭЛЕКТРОНОЙ ПОЧТЫ</label>
          <input className="login-form__input" type="email" id="email" required/>
          <label className="login-form__label" htmlFor="lastName">Фамилия</label>
          <input className="login-form__input" type="text" id="lastName" required/>
          <label className="login-form__label" htmlFor="firstName">Имя</label>
          <input className="login-form__input" type="text" id="firstName" required/>
          <label className="login-form__label" htmlFor="middleName">Отчество</label>
          <input className="login-form__input" type="text" id="middleName"/>
          <label className="login-form__label" htmlFor="birthday">Дата рождения</label>
          <input className="login-form__input" type="date" id="birthday" required/>
          <label className="login-form__label" htmlFor="password">ПАРОЛЬ</label>
          <input className="login-form__input" type="password" id="password" required/>
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