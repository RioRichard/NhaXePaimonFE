import { Routes } from '../Feature/Routes/types';
import { IParams, Response, ResponseList } from '../model';
import axiosClient from './axiosClient';

const routeApi = {
    fetchRoutes(params: IParams): Promise<ResponseList<Routes>> {
        return axiosClient.get('/routes', { params });
    },
    fetchRoutesById(id: string): Promise<Response<Routes>> {
        return axiosClient.get(`/routes/${id}`);
    },
    createRoutes(data: Routes): Promise<Response<Routes>> {
        return axiosClient.post('/routes', data);
    },
    deleteRoutes(data: Routes): Promise<Response<Routes>> {
        return axiosClient.delete(`/routes/${data.id}`);
    },
    updateRoutes(data: Routes): Promise<Response<Routes>> {
        return axiosClient.put(`/routes/${data.id}`, data);
    },
};

export default routeApi;
