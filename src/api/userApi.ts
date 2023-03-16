import { User } from "../Feature/User/types";
import { IParams, Response, ResponseList } from "../model";
import axiosClient from './axiosClient';
const userApi = {
    fetchUser(params: IParams): Promise<ResponseList<User>> {
        return axiosClient.get('/user', { params });
    },
}
export default userApi;