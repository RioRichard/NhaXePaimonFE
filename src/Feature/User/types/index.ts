import { PaginationParams } from "../../../model";

export type User = {
    id?: string;
    username?: string;
    password?: string;
    name?: string;
    email?:string;
    phone?:number;
};
export type UserState = {
    status: 'idle' | 'loading' | 'error' | 'success';
    listUsers: User[];
    pagination: PaginationParams;
    error?: string;
    success?: string;
};

export type UserFormProps = {
    onSubmit: (values: User) => void;
    initialValues: User;
    isEditMode?: boolean;
};

export type UserListProps = {
    rows: User[];
    onUserEditClick?: (User: User) => void;
    onUserDeleteClick?: (User: User) => void;
    onUserCreateClick?: (User: User) => void;
};

export type DialogData = {
    isOpen: boolean;
    title: string;
};

export type UserActionProps = {
    count: number;
};

