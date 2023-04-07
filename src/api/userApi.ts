import { User } from '../Feature/User/types';
import { IParams, Response, ResponseList } from '../model';
import axiosClient from './axiosClient';

const userApi = {
    fetchUsers(params: IParams): Promise<ResponseList<User>> {
        return axiosClient.get('/users', { params });
    },
    fetchUserById(id: string): Promise<Response<User>> {
        return axiosClient.get(`/users/${id}`);
    },
    updateUser(data: any): Promise<Response<User>> {    
        return axiosClient.patch(`/users/${data?._id}`, data);
    },
    createUser(data: User): Promise<Response<User>> {
        return axiosClient.post(`/users`, data);
    },
    deleteUser(data: User): Promise<Response<User>> {
        return axiosClient.delete(`/users/${data._id}`);
    },
};

export default userApi;
