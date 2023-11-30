import axios from "axios";
import * as apiRoute from "./apiRoutes"

const api = axios.create({
    withCredentials:true,
    baseURL: apiRoute.baseUrl
})

api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

export default api