import * as React from 'react';
import OrderList from '../componets/OrderList';
import Stack from '@mui/material/Stack';
import OrderAction from '../componets/OrderAction';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { Order } from '../types';
import { useQueryParams } from '../../Hooks';
import { IParams, MessageProps } from '../../../model';
import { Notification,ConfirmDialog } from '../../../components/Common';
import { orderActions, selectOrdersList, selectOrderStatus, selectOrdersuccess } from '../orderSlice';
import { selectBasesError } from '../../Base/BaseSlice';
export default function Main() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [order, setOrder] = React.useState<Order[]>([]);
    const { queryParams, updateParams } = useQueryParams<IParams>();

    // connect store
    const listOrder: any = useAppSelector(selectOrdersList);
    const error = useAppSelector(selectBasesError);
    const success = useAppSelector(selectOrdersuccess);
    const status = useAppSelector(selectOrderStatus);
    // dispatch fetch list
    const [notify, setNotify] = React.useState<MessageProps>({
        isOpen: false,
        message: '',
        type: 'success'
    });
    React.useEffect(() => {
        dispatch(orderActions.fetchOrders(queryParams));
    }, [queryParams]);
    React.useEffect(() => {
        setOrder(
            listOrder?.orders?.map((item: any) => {
                return {
                    ...item,
                };
            })
        );
    }, [listOrder?.orders]);
    console.log(listOrder);
    
    // show message
    React.useEffect(() => {
        if (status === 'error' && error) {
            setNotify({
                isOpen: true,
                message: error,
                type: 'error'
            });
        }
    }, [status, error]);

    React.useEffect(() => {
        if (status === 'success' && success) {
            setNotify({
                isOpen: true,
                message: success,
                type: 'success'
            });
        }
    }, [status, success]);
    const onOrdeEditClick = (orders: Order) => {
        navigate(`${location.pathname}/${orders.id}`);
    };
    return (
        <Stack >
            <OrderAction />
            <OrderList
                rows={listOrder?.orders}
                onOrderEditClick={onOrdeEditClick}
            />
            <Notification notify={notify} setNotify={setNotify} />
        </Stack>

    )
}