import { Order } from '../Feature/Order/types'; 
import { IParams, Response, ResponseList } from '../model';
import axiosClient from './axiosClient'; 

const orderApi = {
    fetchOrders(params: IParams): Promise<ResponseList<Order>> {
        return axiosClient.get('/orders', { params });
    },
    fetchOrderById(id: string): Promise<Response<Order>> {
        return axiosClient.get(`/orders/${id}`);
    },
    createOrder(data: Order): Promise<Response<Order>> {
        console.log("post", data);
        
        return axiosClient.post('/orders', data);
    },
    deleteOrder(data: Order): Promise<Response<Order>> {
        return axiosClient.delete(`/orders/${data._id}`);
    },
    updateOrder(data: Order): Promise<Response<Order>> {
        return axiosClient.put(`/orders/${data._id}`, data);
    },
};

export default orderApi;
