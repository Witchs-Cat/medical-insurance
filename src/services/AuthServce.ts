import {AxiosResponse} from "axios"

import api from "../http/api";
import * as route from "../http/apiRoutes"
import IAuthResponse from "../store/models/response/IAuthResplonse";
import ILoginRequest from "../store/models/request/ILoginRequest";
import IRegistrationRequest from "../store/models/request/IRegistrationRequest";

export default class AuthService{
    //{email, password}: ILoginRequest
    static async login(request: ILoginRequest): Promise<IAuthResponse>{
        const response = await api.post(route.loginUrl, request)
        return response.data
        // return new Promise((resolve, reject)=> resolve({ token: "00000"}))
    }

    static async registration(request: IRegistrationRequest): Promise<IAuthResponse>{
        const response = await api.post(route.registrationUrl, request)
        return response.data
        //return api.post(route.registrationUrl, request)
        //return new Promise((resolve, reject) => resolve({ token: "00000"}))
    }
}