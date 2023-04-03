import { User } from '../Feature/User/types'
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
    getMe(): Promise<User> {
        return axiosClient.get('authen/getme');
    },
    getMeAdmin(): Promise<User> {
        return axiosClient.get('authen/admin/getme');
    }
};

export default authApi;
