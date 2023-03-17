import { Manager } from '../Feature/Manager/types';
import { IParams, Response, ResponseList } from '../model';
import axiosClient from './axiosClient';

const managerApi = {
    fetchManagers(params: IParams): Promise<ResponseList<Manager>> {
        return axiosClient.get('/managers', { params });
    },
};

export default managerApi;
