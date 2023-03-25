import { PaginationParams } from "../../../model";
import { Bus } from "../../Bus/types";

export type Routes = {
    id?: string;
    bus?:Bus;
    from?: any;
    to?: any;
    departure?: string;
    arrival?: string;
    driver?: string;
    extraStaff?: string;
    price?: string;
    status?: string;
    select?: boolean;
};
export type RoutesState = {
    status: 'idle' | 'loading' | 'error' | 'success';
    listRoutes: Routes[];
    pagination: PaginationParams;
    error?: string;
    success?: string;
};

export type RoutesListProps = {
    rows: Routes[];
    onRoutesDeleteClick?: (route: Routes) => void;
    onRoutesEditClick?: (route: Routes) => void;
    onCheckboxAllChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onCheckboxChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export type RouteFormProps = {
    onSubmit: (values: Routes) => void;
    initialValues?: Routes;
    isEditMode: boolean;
};
export type DialogData = {
    isOpen: boolean;
    title: string;
};
export type RouteActionProps = {
    count: number;
};


