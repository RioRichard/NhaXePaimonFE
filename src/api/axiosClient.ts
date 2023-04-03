import axios, { AxiosResponse } from 'axios';
import storage from '../utils/storage';
import { useAppDispatch } from '../app/hooks';

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
  config => {
    const adminToken = storage.getAdminAccessToken();
    const token = storage.getAccessToken();
    if (adminToken) {
      config.headers.Authorization = `Bearer ${adminToken}`
    }
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);
export default axiosClient;
