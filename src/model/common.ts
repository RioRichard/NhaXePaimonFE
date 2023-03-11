export type IParams = {
    _page?: number;
    _limit?: number;
    _sort?: string;
    _order?: boolean;
    // _q?: string;
    search?: string;
    _total?: number;
    _keyValue?: string[];
    [key : string] : any;
    writeOnly?:boolean;
};
export type PatchParams<T> = {
    replaceProperty: string[];
    value: T;
};
export type Response<T> = {
    data: T;
    message?: string;
    code?: string;
};
export type ResponseList<T> = {
    data: T[];
    pagination: PaginationParams;
    message?: string;
};
export type PaginationParams = {
    _limit: number;
    _page: number;
    _total: number;
    
};
export type TablePaginationProps = {
    count: number;
    page: number;
    onPageChange?: (e: React.ChangeEvent<unknown>, newPage: number) => void;
    onChangeRowsPerPage?: (e: { target: { value: string } }) => void;
};
export type NotificationProps = {
    notify: any;
    setNotify: any;
};

export type ResponseUploader = {
    data: {
        url: string;
        resource_type?: string;
    };
};



export type MessageProps = {
    isOpen: boolean;
    message: string;
    type: string;
};

export type ConfirmDialogProps = {
    isOpen: boolean;
    title: string;
    subTitle: string;
    onConfirm: () => void;
};

export type ConfirmModalProps = {
    isOpen: boolean;
    title: string;
    onConfirm: () => void;
};

export type ImportDialogProps = {
    isOpen: boolean;
    title: string;
};



export type DialogData = {
    isOpen: boolean;
    title: string;
};
