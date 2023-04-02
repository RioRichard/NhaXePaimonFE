import { PaginationParams } from "../../../model";
import { Bus } from "../../Bus/types";

export type Routes = {
    id?: string;
    bus?: Bus;
    from?: any;
    to?: any;
    departure?: any;
    arrival?: any;
    driver?: string;
    extraStaff?: string;
    price?: string;
    status?: string;
    select?: boolean;
    bus_id?: string;
    from_id?: string;
    to_id?: string;
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
};
export type RouteFormProps = {
    listBase: any;
    listBus: any;
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


