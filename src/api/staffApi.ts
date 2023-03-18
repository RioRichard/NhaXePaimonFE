import { Staff } from '../Feature/Staff/types'; 
import { IParams, Response, ResponseList } from '../model';
import axiosClient from './axiosClient'; 

const staffApi = {
    fetchStaff(params: IParams): Promise<ResponseList<Staff>> {
        return axiosClient.get('/staffs', { params });
    },
    fetchStaffById(id: string): Promise<Response<Staff>> {
        return axiosClient.get(`/staffs/${id}`);
    },
    createStaff(data: Staff): Promise<Response<Staff>> {
        return axiosClient.post('/staffs', data);
    },
    deleteStaff(data: Staff): Promise<Response<Staff>> {
        return axiosClient.delete(`/staffs/${data.id}`);
    },
    updateStaff(data: Staff): Promise<Response<Staff>> {
        return axiosClient.put(`/staffs/${data.id}`, data);
    },
};

export default staffApi;
