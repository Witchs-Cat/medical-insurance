export enum CommonRoute {
  Home = "/home",
}

export enum PublicRoute {
  DefaultRoute = CommonRoute.Home,
  Login = "/login",
  Signup = "/signup"
}

export enum PrivateRoute {
  DefaultRoute = CommonRoute.Home,
  PersonalAccount = "/personal"
}