import { PaginationParams } from "../../../model";

export type Manager = {
    id?: string;
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

export type ManagerFormProps = {
    onSubmit: (values: Manager) => void;
    initialValues: Manager;
    isEditMode?: boolean;
};

export type ManagerListProps = {
    rows: Manager[];
    onManagerEditClick?: (Manager: Manager) => void;
    onManagerDeleteClick?: (Manager: Manager) => void;
    onManagerCreateClick?: (Manager: Manager) => void;
};

export type DialogData = {
    isOpen: boolean;
    title: string;
};

export type ManagerActionProps = {
    count: number;
};

