import { Box, Typography } from '@mui/material';
import RegisterForm from '../components/RegisterForm';
import { Notification } from '../../../components/Common';
import { authActions, LoginPayload, selectIsError, selectIsSuccess } from '../authSlice';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { User } from '../../User/types';
import React from 'react';
import { userActions } from '../../User/userSlice';

export default function RegisterPage() {
    const error: any = useAppSelector(selectIsError);
    const success: any = useAppSelector(selectIsSuccess);
    const dispatch = useAppDispatch();
    const [notify, setNotify] = React.useState({
        isOpen: false,
        message: '',
        type: 'success'
    });
    React.useEffect(() => {
        if (error) {
            setNotify({
                isOpen: true,
                message: error?.message,
                type: 'error'
            });
        }
    }, [error]);

    React.useEffect(() => {
        if (success) {
            setNotify({
                isOpen: true,
                message: success?.message,
                type: 'success'
            });
        }
    }, [success]);

    const handleSubmit = (values: User) => {
            dispatch(authActions.register(values));
    };
return (
    <Box sx={{
        backgroundImage: `url(https://i1-vnexpress.vnecdn.net/2021/04/08/Xe-Bus-Dien-VinFast-VnExpress-12-1617869550.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=QtGfexgpQhQLsIuHd7yKlg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Box sx={{
            textAlign: 'center',
            backgroundColor: '#ffffff',
            borderRadius: '10px',
            padding: '40px',

            '& > div > h1': {
                marginBottom: '24px'
            }
        }}>
            <Box>
                <Typography variant="h4" fontWeight="bold">
                    Đăng ký tài khoản
                </Typography>
                <Typography color="secondary">Nhập thông tin của bạn để đăng ký tài khoản</Typography>
            </Box>

            <Box sx={{ marginTop: '24px' }}>
                <RegisterForm onSubmit={handleSubmit} />
            </Box>
        </Box>
        <Notification notify={notify} setNotify={setNotify} />
    </Box>
);
}
