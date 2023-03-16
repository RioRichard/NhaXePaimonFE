import { PaginationParams } from "../../../model";

export type Manager = {
    _id?: string;
    username?: string;
    password?: string;
    name?: string;
    email?:string;
    phone?:number;
    role?:string;
};
export type ManagerState = {
    status: 'idle' | 'loading' | 'error' | 'success';
    listManagers: Manager[];
    pagination: PaginationParams;
    error?: string;
    success?: string;
};

export type ManagerListProps = {
    rows: Manager[];
};

export type DialogData = {
    isOpen: boolean;
    title: string;
};


