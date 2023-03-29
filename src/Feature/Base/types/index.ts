import { PaginationParams } from "../../../model";

export type Base = {
    id?: string;
    name?: string;
    address?: string;
    select?: boolean;
};
export type BaseState = {
    status: 'idle' | 'loading' | 'error' | 'success';
    listBases: any;
    pagination: PaginationParams;
    error?: string;
    success?: string;
};

export type BaseListProps = {
    rows: Base[];
    onBaseDeleteClick?: (base: Base) => void;
    onBaseEditClick?: (base: Base) => void;
    onCheckboxAllChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onCheckboxChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export type BasesFormProps = {
    onSubmit: (values: Base) => void;
    initialValues?: Base;
    isEditMode: boolean;
};
export type DialogData = {
    isOpen: boolean;
    title: string;
};
export type BasesActionProps = {
    count: number;
};


