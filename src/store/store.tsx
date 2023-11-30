import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthServce";
import ILoginRequest from "./models/request/ILoginRequest";
import IUser from "./models/response/IUser"
import IRegistrationRequest from "./models/request/IRegistrationRequest";

export default class Store{
    // selfUser = {} : IUser
    isAuth = false;

    constructor(){
        makeAutoObservable(this)
    }

    async login(email:string, password:string){
        const response = await AuthService.login({email, password})
        localStorage.setItem('token', response.data.token);
        this.isAuth = true;
    }

    async registration(email:string, password:string, username:string, birthday:Date){
        const response = await AuthService.registration({email, password, username, birthday})
        localStorage.setItem('token', response.data.token);
        this.isAuth = true;
    }
}