
import { Box, Stack } from '@mui/material';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import orderApi from '../../../api/orderApi';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import OrderForm from '../componets/OrderForm';
import { orderActions, selectOrderError, selectOrderStatus } from '../orderSlice';
import { Order } from '../types';
import { Response } from '../../../model';

export default function AddEdit() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { orderId } = useParams<{ orderId: string }>();
    const [notify, setNotify] = React.useState({
        isOpen: false,
        message: '',
        type: 'success'
    });
    
    const [order, setOrder] = React.useState<Order>();
    const isEditMode = Boolean(orderId);
    const status = useAppSelector(selectOrderStatus);
    const error = useAppSelector(selectOrderError);

    React.useEffect(() => {
        if (!orderId) return;
        (async () => {
            try {
                const response: Response<any> = await orderApi.fetchOrderById(orderId);
                setOrder(response.data.orders);
            } catch (error) {
                // navigate(-1);
            }
        })();
    }, [orderId]);

    React.useEffect(() => {
        if (status === 'error' && error) {
            setNotify({
                isOpen: true,
                message: error,
                type: 'error'
            });
        }
    }, [status, error]);
    const handleSubmit = (values: Order) => {
        console.log("values",values);
        const putData={
            id:values.id,
            status:values.status,
            paymentInfo:values.paymentInfo
        }
        return new Promise((resolve) => {
            setTimeout(() => {
                if (isEditMode) {
                    // edit
                    dispatch(orderActions.updateOrder(putData));
                } else {
                    // add
                    dispatch(orderActions.createOrder(values));
                }
                resolve(true);
            }, 1000);
        });
    };
    const initialValues = isEditMode ? order && order : undefined;
    return (    
        <Stack spacing={4}>
            {(!isEditMode || Boolean(order)) && (
                <Box sx={{ width: '60%', backgroundColor: '#fff', p: 3 }}>
                    <OrderForm isEditMode={isEditMode} initialValues={initialValues} onSubmit={handleSubmit} />
                </Box>
            )}
        </Stack>
    );
}
