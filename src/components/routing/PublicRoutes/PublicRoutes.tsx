import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../../../views/home/Home';
import Login from '../../../views/login/Login';
import Signup from '../../../views/signup/Signup';


export const publicRoute = {
    defaultRoute: "/home",
    home: "/home",
    login: "/login",
    signup: "/signup",
  }


const PublicRoutes = () => {
  return <Routes>
    <Route path="/" element={<Navigate to={publicRoute.defaultRoute} />} />
    <Route path={publicRoute.home} element={<Home/>}/>
    <Route path={publicRoute.login} element={<Login/>}/>
    <Route path={publicRoute.signup}  element={<Signup/>}/>
  </Routes>
}

export default PublicRoutes