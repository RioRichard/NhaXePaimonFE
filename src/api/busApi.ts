import { Bus } from '../Feature/Bus/types';
import { IParams, Response, ResponseList } from '../model';
import axiosClient from './axiosClient';

const busesApi = {
    fetchBus(params: IParams): Promise<ResponseList<Bus>> {
        return axiosClient.get('/buses', { params });
    },
    fetchBusById(id: string): Promise<Response<Bus>> {
        return axiosClient.get(`/buses/${id}`);
    },
    createBus(data: Bus): Promise<Response<Bus>> {
        return axiosClient.post('/buses', data);
    },
    deleteBus(data: Bus): Promise<Response<Bus>> {
        return axiosClient.delete(`/buses/${data.id}`);
    },
    updateBus(data: Bus): Promise<Response<Bus>> {
        return axiosClient.put(`/buses/${data.id}`, data);
    },
};

export default busesApi;
