import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import TourIcon from '@mui/icons-material/Tour';
import { Box, Grid, Stack, Typography } from '@mui/material';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
/* import { useNavigate } from 'react-router-dom'; */
import BookTicketList from '../componets/BookTicketList';
import DashboardCard from '../componets/DashboardCard';
import DashboardWidget from '../componets/DashboardWidget';
import BusList from '../componets/BusList';
import RouteList from '../componets/RouteList';
import AccountList from '../componets/AccountList';
import { selectNewBusList, selectNewOrderList, dashboardActions, selectNewRouteList, selectNewUserList } from '../dashboardSlice';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import React from 'react'

export default function HomePage() {
    /* const navigate = useNavigate(); */
    const dispatch = useAppDispatch();
    const newOrderList: any = useAppSelector(selectNewOrderList);
    const newBusList: any = useAppSelector(selectNewBusList);
    const newRouteList: any = useAppSelector(selectNewRouteList);
    const newUserList: any = useAppSelector(selectNewUserList);
    console.log(newUserList);
    
    const fiveNewBusList: any = newBusList?.buses?.slice(0, 5);
    const fiveNewOrderList: any = newOrderList?.orders?.slice(0, 5);
    const fiveNewRouteList: any = newRouteList?.routes?.slice(0, 5);
    const fiveNewUserList: any = newUserList?.slice(0, 5);
    React.useEffect(() => {
        dispatch(dashboardActions.fetchData());
    }, []);
    let countSuccessOrderList = 0
    let countFaileOrderList = 0
    newOrderList?.orders?.map((item: any) => {
        (item.status == "success") && countSuccessOrderList++
    })
    newOrderList?.orders?.map((item: any) => {
        (item.status == "fail") && countFaileOrderList++
    })
    const countNewBusList = newBusList?.buses?.length
    const countNewRouteList = newRouteList?.routes?.length
    console.log(newUserList)
    return (
        <Stack spacing={4}>
            <Typography variant="h2">Tổng quan</Typography>

            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={3}>
                        <DashboardCard title="TỔNG ĐƠN THÀNH CÔNG" count={countSuccessOrderList} icon={<CheckCircleOutlineIcon color="primary" />} />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <DashboardCard title="TỔNG ĐƠN THẤT BẠI" count={countFaileOrderList} icon={<CancelIcon color="success" />} />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <DashboardCard title="TỔNG SỐ TUYẾN" count={countNewRouteList} icon={<TourIcon color="error" />} />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <DashboardCard title="TỔNG XE QUẢN LÝ" count={countNewBusList} icon={<DirectionsBusFilledIcon color="warning" />} />
                    </Grid>
                </Grid>
            </Box>

            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6}>
                        <Box sx={{ cursor: 'pointer' }}>
                            <DashboardWidget title="Danh sách đơn vé được đặt gần đây">
                                <BookTicketList rows={fiveNewOrderList}></BookTicketList>
                            </DashboardWidget>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Box sx={{ cursor: 'pointer' }}>
                            <DashboardWidget title="Danh sách xe được tạo gần đây">
                                <BusList rows={fiveNewBusList}></BusList>
                            </DashboardWidget>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Box sx={{ cursor: 'pointer' }}>
                            <DashboardWidget title="Danh sách tuyến xe được tạo gần đây">
                                <RouteList rows={fiveNewRouteList}></RouteList>
                            </DashboardWidget>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Box sx={{ cursor: 'pointer' }}>
                            <DashboardWidget title="Danh sách tài khoản khách hàng tạo gần đây">
                                <AccountList rows={fiveNewUserList}></AccountList>
                            </DashboardWidget>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Stack>
    );
}
