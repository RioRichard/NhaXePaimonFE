import { PaginationParams } from "../../../model";
import { Routes } from "../../Routes/types";
import { Staff } from "../../Staff/types";

export type Order = {
    id?: string;
    route?: Routes;
    status?: string;
    paymentInfo?: string;
}
export type OrderState = {
    status: 'idle' | 'loading' | 'error' | 'success';
    listOrders: Order[];
    pagination: PaginationParams;
    error?: string;
    success?: string;
};

export type OrderFormProps = {
    onSubmit: (values: Order) => void;
    initialValues?: Order;
    isEditMode?: boolean;
};

export type OrderListProps = {
    rows: Order[];
    onOrderEditClick?: (Order: Order) => void;
    onOrderDeleteClick?: (Order: Order) => void;
    onOrderCreateClick?: (Order: Order) => void;
};

export type DialogData = {
    isOpen: boolean;
    title: string;
};

export type OrderActionProps = {
    count: number;
};

