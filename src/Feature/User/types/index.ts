import { DialogData, IParams, MessageProps, PaginationParams } from "../../../model";

export type User = {
    id: string;
    username: string;
    password?: string;
    name?: string;
    email?: string;
    phone?: string;
};
export type UserState = {
    status: 'idle' | 'loading' | 'error' | 'success';
    listUser: User[];
    pagination: PaginationParams;
    error?: string;
    success?: string;
};