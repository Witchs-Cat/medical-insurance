import { useNavigate } from "react-router-dom"

import {
  CommonRoute,
  PublicRoute, 
  PrivateRoute} from "./routes"

export * from "./routes"

export const usePublicNavigation = () =>{
  const navigate = useNavigate()

  const toHome = () => navigate(CommonRoute.Home)
  const toLogin = () => navigate(PublicRoute.Login)
  const toSignup = () => navigate(PublicRoute.Signup)
  const toDefaultPage = () => navigate(PrivateRoute.DefaultRoute)
  return [toHome, toLogin, toSignup, toDefaultPage] as const
}

export const usePrivateNavigation = () => {
  const navigate = useNavigate()

  const toHome = () => navigate(CommonRoute.Home)
  const toPeronsalAccount = () => navigate(PrivateRoute.PersonalAccount)
  const toDefaultPage = () => navigate(PrivateRoute.DefaultRoute)

  return [toHome, toPeronsalAccount, toDefaultPage] as const
}
