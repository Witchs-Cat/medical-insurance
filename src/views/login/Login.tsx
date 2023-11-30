import React from 'react'

import './login.css'

const Login = () => {
  return <main className='login'>
      <form className="login-form">
        <input type="email" />
        <input type="password" />
        <button type="submit">Войти</button>
      </form>
  </main>
}

export default Login