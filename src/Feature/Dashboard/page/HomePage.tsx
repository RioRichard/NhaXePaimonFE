import AddCardIcon from '@mui/icons-material/AddCard';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BookTicketList from '../componets/BookTicketList';
import DashboardCard from '../componets/DashboardCard';
import DashboardWidget from '../componets/DashboardWidget';
import DiscountList from '../componets/DiscountList';
import RouteList from '../componets/RouteList';
import AccountList from '../componets/AccountList';


export default function HomePage() {
    const navigate = useNavigate();

   
    
    return (
        <Stack spacing={4}>
            <Typography variant="h2">Tổng quan</Typography> 

            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={3}>
                        <DashboardCard title="Tổng đơn đã thanh toán" count={1} icon={<AddCardIcon color="primary" />} />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <DashboardCard title="Tổng nhân viên trực thuộc" count={2} icon={<SupervisedUserCircleIcon color="success" />} />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <DashboardCard title="Tổng số tuyến xe" count={3} icon={<FiberNewIcon color="error" />} />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <DashboardCard title="Địa điểm được đặt vé nhiều nhất"  count={4}  icon={<WarningAmberIcon color="warning" />} />
                    </Grid>
                </Grid>
            </Box>

            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6}>
                        <Box  sx={{ cursor: 'pointer' }}>
                            <DashboardWidget title="Danh sách đơn vé vừa được đặt">
                                <BookTicketList></BookTicketList>
                            </DashboardWidget>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Box sx={{ cursor: 'pointer' }}>
                            <DashboardWidget title="Danh sách khuyến mãi vừa tạo">
                                <DiscountList></DiscountList>
                            </DashboardWidget>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Box  sx={{ cursor: 'pointer' }}>
                            <DashboardWidget title="Danh sách tuyến xe vừa tạo">
                                <RouteList></RouteList>
                            </DashboardWidget>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Box  sx={{ cursor: 'pointer' }}>
                            <DashboardWidget title="Danh sách tài sản khách hàng vừa tạo">
                                <AccountList></AccountList>
                            </DashboardWidget>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Stack>
    );
}
