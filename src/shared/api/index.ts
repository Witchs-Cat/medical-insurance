import axios from "axios";

import { ApiRoute } from "../config";

export const apiInstance = axios.create({
    baseURL: ApiRoute.Base,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});