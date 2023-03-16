import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { history } from '../utils/history';
import queryString from 'query-string';


const baseURL = process.env.REACT_APP_API_URL

// set up default config
const axiosClient = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-type': 'application/json',
        // 'Access-Control-Allow-Origin': '*'
    },
    paramsSerializer: (params) => queryString.stringify(params)
});


export default axiosClient;
