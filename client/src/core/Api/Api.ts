import axios, {AxiosInstance} from "axios";
import {ServerURI} from "../configs";

export const Api: AxiosInstance = axios.create({
    baseURL: ServerURI
})