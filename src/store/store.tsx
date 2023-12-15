import { makeAutoObservable, observable } from "mobx";
import AuthService from "../services/AuthServce";
import IUser from "./models/response/IUser"
import UserService from "../services/UserService";

export default class Store{
    private selfUser = {} as IUser
    private isAuth = false;

    constructor(){
        makeAutoObservable(this)
    }

    getIsAuth()
    {
        return this.isAuth
    }

    getSelfUser()
    {
        return this.selfUser
    }

    setSelfUser(user:IUser){
        this.selfUser = user
    }

    async loginAsync(email:string, password:string){
        const response = await AuthService.login({email, password})
        localStorage.setItem('token', response.token)

        this.isAuth = true 
        this.setSelfUser(await this.getMeAsync())   
    }

    async getMeAsync(){
        return UserService.getMeAsync();
    }

    async registrationAsync(email:string, password:string, username:string, birthday:Date){
        const response = await AuthService.registration({email, password, username, birthdayDate:birthday})
        localStorage.setItem('token', response.token)
        
        this.isAuth = true 
        this.setSelfUser(await this.getMeAsync()) 
    }
}