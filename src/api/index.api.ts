
import axios, { AxiosInstance } from 'axios';


const token:string | null = localStorage.getItem('auth_token');

const axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.API_URL,
    timeout: 5000,
    headers: {
        Authorization: token ? `Bearer ${token}` : "",
    },
});

axiosInstance.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error.response.data);
    }
);

export const MainApi: AxiosInstance = axiosInstance;
