import { ResponseAuth } from '../Feature/auth/types';
import axiosClient from './axiosClient';

const authApi = {
    login(data: object): Promise<any> {
        return axiosClient.post('authen', data);
    },
    adminLogin(data: object): Promise<any> {
        return axiosClient.post('authen/admin', data);
    },
    register(data: object) {
        return axiosClient.post('auth/register', data);
    },
};

export default authApi;
