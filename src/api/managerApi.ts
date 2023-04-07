import { Manager } from '../Feature/Manager/types';
import { IParams, Response, ResponseList } from '../model';
import axiosClient from './axiosClient';

const managerApi = {
    fetchManagers(params: IParams): Promise<ResponseList<Manager>> {
        return axiosClient.get('/managers', { params });
    },
    fetchManagerById(id: string): Promise<Response<Manager>> {
        return axiosClient.get(`/managers/${id}`);
    },
    updateManager(data: any): Promise<Response<Manager>> {
        return axiosClient.put(`/managers/${data?._id}`, data);
    },
    createManager(data: Manager): Promise<Response<Manager>> {
        console.log(data);
        
        return axiosClient.post(`/managers`, data);
    },
    deleteManager(data: Manager): Promise<Response<Manager>> {
        return axiosClient.delete(`/managers/${data._id}`);
    },
};

export default managerApi;
