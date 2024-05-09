
import axios, { AxiosInstance } from 'axios';
import { getAuthToken } from './getAuthToken';

const token = getAuthToken();

const axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.API_URL,
    timeout: 5000,
    headers: {
        // "Content-Type": "application/json",
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
