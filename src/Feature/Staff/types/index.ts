import { PaginationParams } from "../../../model";

export type Staff = {
    id?: string;
    name?: string;
    address?: string;
    phone?: string;
    position?: string;
    select?: boolean;
};
export type StaffState = {
    status: 'idle' | 'loading' | 'error' | 'success';
    listStaff: Staff[];
    pagination: PaginationParams;
    error?: string;
    success?: string;
};

export type StaffListProps = {
    rows: Staff[];
    onStaffDeleteClick?: (base: Staff) => void;
    onStaffEditClick?: (base: Staff) => void;
    onCheckboxAllChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onCheckboxChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export type StaffFormProps = {
    onSubmit: (values: Staff) => void;
    initialValues?: Staff;
    isEditMode: boolean;
};
export type DialogData = {
    isOpen: boolean;
    title: string;
};
export type StaffActionProps = {
    count: number;
};


