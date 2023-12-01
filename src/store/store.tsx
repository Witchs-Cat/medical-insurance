import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthServce";
import IUser from "./models/response/IUser"
import UserService from "../services/UserService";

export default class Store{
    selfUser = {} as IUser
    isAuth = false;

    constructor(){
        makeAutoObservable(this)
    }

    async loginAsync(email:string, password:string){
        console.log("начало")
        const response = await AuthService.login({email, password})
        localStorage.setItem('token', response.token)
        this.isAuth = true  
        console.log("токен")
        const user =  await this.getMeAsync()
        console.log("конец")
        this.selfUser = user;
    }

    async getMeAsync(){
        return UserService.getMeAsync();
    }

    async registrationAsync(email:string, password:string, username:string, birthday:Date){
        const response = await AuthService.registration({email, password, username, birthday})
        localStorage.setItem('token', response.token);
        this.isAuth = true;
    }
}