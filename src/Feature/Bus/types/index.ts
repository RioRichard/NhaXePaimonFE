import { PaginationParams } from "../../../model";

export type Bus = {
    id?: string;
    bus_number?: string;
    type?: string;
    select?: boolean;
};
export type Bustate = {
    status: 'idle' | 'loading' | 'error' | 'success';
    listBus: Bus[];
    pagination: PaginationParams;
    error?: string;
    success?: string;
};

export type BusListProps = {
    rows: Bus[];
    onBusDeleteClick?: (bus: Bus) => void;
    onBusEditClick?: (bus: Bus) => void;
};
export type BusFormProps = {
    onSubmit: (values: Bus) => void;
    initialValues?: Bus;
    isEditMode: boolean;
};
export type DialogData = {
    isOpen: boolean;
    title: string;
};
export type BusActionProps = {
    count: number;
};


