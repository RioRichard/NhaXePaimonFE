import { Base } from '../Feature/Base/types';
import { IParams, Response, ResponseList } from '../model';
import axiosClient from './axiosClient';

const basesApi = {
    fetchBase(params: IParams): Promise<ResponseList<Base>> {
        return axiosClient.get('/bases', { params });
    },
    fetchBaseById(id: string): Promise<Response<Base>> {
        return axiosClient.get(`/bases/${id}`);
    },
    createBase(data: Base): Promise<Response<Base>> {
        return axiosClient.post('/bases', data);
    },
    deleteBase(data: Base): Promise<Response<Base>> {
        return axiosClient.delete(`/bases/${data._id}`);
    },
    updateBases(data: Base): Promise<Response<Base>> {
        return axiosClient.put(`/bases/${data._id}`, data);
    },
};

export default basesApi;
