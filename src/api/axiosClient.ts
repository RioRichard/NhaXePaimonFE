import axios, { AxiosResponse } from 'axios';
import { AxiosRequestConfig } from 'axios';
import queryString from 'query-string';
import storage from '../utils/storage';

console.log(process.env.REACT_APP_API_URL)
// set up default config
const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
});

axiosClient.interceptors.response.use(
    function (response: AxiosResponse) {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
);

axiosClient.interceptors.request.use(
    config  => {
      const adminToken = storage.getAccessToken();
      const token = storage.getAccessToken();
      if (token) {
        config.headers.Authorization = `Bearer ${adminToken}`;
      }
      return config;
    },
    error => {
      Promise.reject(error);
    }
  );
export default axiosClient;
