import {AxiosResponse} from "axios"

import api from "../http/api";
import * as route from "../http/apiRoutes"
import IUser from "../store/models/response/IUser";

export default class UserService{
    //{email, password}: ILoginRequest
    static async getMeAsync(): Promise<IUser>{
        const response = await api.get(route.me)
        return response.data
        /*new Promise((resolve)=> resolve({
            username: "Даниил",
            bithday: new Date(),
            role: "none"
        }))*/
    }
}