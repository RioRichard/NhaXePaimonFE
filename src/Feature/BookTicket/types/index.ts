
import { Order } from "../../Order/types";

export type Step1FormProps = {
    onSubmit: (values: Order) => void;
};
export type BookTicketData = {
    bookTicketData: Order[];
};

export type Step1 = {
    from_id?: string;
    to_id?: string;
}

export type Step2 = {
    email?: string;
    phone?: string;
}

export type Step3 = {
    address?: string;
}

export type FinalData = {
    id?: string;
    userId?: string;
    routeId?: string;
    seatsId?: string;
    status?: string;
    paymentInfo?: number;
    from_id?: string;
    to_id?: string;
}

export type FormState = {
    step1: Step1;
    step2: Step2;
    step3: Step3;
    finalData: FinalData;
}