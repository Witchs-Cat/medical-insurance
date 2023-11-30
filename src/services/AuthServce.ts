import {AxiosResponse} from "axios"

import api from "../http/api";
import * as route from "../http/apiRoutes"
import IAuthResponse from "../store/models/response/IAuthResplonse";
import ILoginRequest from "../store/models/request/ILoginRequest";
import IRegistrationRequest from "../store/models/request/IRegistrationRequest";

export default class AuthService{
    //{email, password}: ILoginRequest
    static async login(request: ILoginRequest): Promise<AxiosResponse<IAuthResponse>>{
        return api.post(route.loginUrl, request)
    }

    static async registration(request: IRegistrationRequest): Promise<AxiosResponse<IAuthResponse>>{
        return api.post(route.registrationUrl, request)
    }
}