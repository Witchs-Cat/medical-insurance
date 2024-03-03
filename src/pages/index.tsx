import { Routes, Route, Navigate } from 'react-router-dom'

import { HomePage } from './home'
import { SignupPage } from './signup'
import { LoginPage } from './login'

import { 
  CommonRoute, 
  PublicRoute, 
  PrivateRoute 
  } from '@features'

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={PublicRoute.DefaultRoute} />} />
      <Route path={CommonRoute.Home} element={<HomePage/>}/>
      <Route path={PublicRoute.Login} element={<LoginPage/>}/>
      <Route path={PublicRoute.Signup} element={<SignupPage/>}/>
    </Routes>
  )
}

export default Routing