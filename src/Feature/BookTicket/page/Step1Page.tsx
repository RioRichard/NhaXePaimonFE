import Step1 from "../components/Step1";
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { Order } from "../../Order/types";
import { updateFormData } from "../BookTicketSlice";
import { history } from "../../../utils";

export default function Step1Page() {
    /* const dispatch = useAppDispatch();
    const handleSubmit = (values: Order) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newData = {
                    from_id: values?.from_id,
                    to_id: values?.to_id,
                };
                const formData: any = { ...newData };
                const data: any = {
                    step: 'step1',
                    formData,
                };
                dispatch(updateFormData(data))
                history.push('/chon-ghe')
                resolve(true);
            }, 10);
        });
    } */
    return (
        <></>
    );
}
