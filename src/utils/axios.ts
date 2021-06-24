import axios, { AxiosInstance } from "axios";


const axiosInstance : AxiosInstance = axios.create({ baseURL: 'http://api.tvmaze.com' });

export default axiosInstance;
