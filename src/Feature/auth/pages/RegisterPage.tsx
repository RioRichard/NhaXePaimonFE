import { Box, Typography } from '@mui/material';
import RegisterForm from '../components/RegisterForm';

export default function RegisterPage() {
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
                    <RegisterForm />
                </Box>
            </Box>
        </Box>
    );
}
