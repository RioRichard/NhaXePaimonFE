import { Box, Typography } from '@mui/material';
import AdminLoginForm from '../components/AdminLoginForm';
import { Notification } from '../../../components/Common';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import React from 'react';
import { authActions, LoginPayload, selectIsError, selectIsSuccess } from '../authSlice';
import adminLoginImage from '../../../assets/images/adminLogin.jpg'

export default function AdminLoginPage() {
    const dispatch = useAppDispatch();
    const [notify, setNotify] = React.useState({
        isOpen: false,
        message: '',
        type: 'success'
    });

    const error : any= useAppSelector(selectIsError);
    const success :any = useAppSelector(selectIsSuccess);

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

    const handleSubmit = (data: LoginPayload) => {
        dispatch(authActions.adminLogin(data));
    };
    return (
        <Box sx={{
            backgroundImage: `url(${adminLoginImage})`,
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
                        Đăng nhập Admin
                    </Typography>
                    <Typography color="secondary">Nhập thông tin đăng nhập của bạn để tiếp tục</Typography>
                </Box>

                <Box sx={{ marginTop: '24px' }}>
                    <AdminLoginForm onSubmit={handleSubmit} />
                </Box>
            </Box>
            <Notification notify={notify} setNotify={setNotify} />
        </Box >
    );
}
