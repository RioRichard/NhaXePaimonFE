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
};

export default managerApi;
