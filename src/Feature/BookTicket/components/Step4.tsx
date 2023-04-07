
import { FormProvider, useForm } from 'react-hook-form';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Typography, Grid, Container, Stack, Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import { Response } from '../../../model';
import routeApi from '../../../api/routeApi';
import { Routes } from '../../Routes/types';
import moment from 'moment';
import { orderActions } from '../../Order/orderSlice';
import { useAppDispatch } from '../../../app/hooks';

export default function Step4(props: { page: any, setPage: any, formData: any }) {
  const dispatch = useAppDispatch();
  const { page, setPage, formData } = props;
  const methods = useForm<any>({
  });
  const [route, setRoute] = React.useState<any>();
  React.useEffect(() => {
    if (!formData?.routeId) return;
    (async () => {
      try {
        const response: Response<Routes> = await routeApi.fetchRoutesById(formData?.routeId);
        const routesData: any = response.data;
        setRoute(routesData.routes);
      } catch (error) {
        // navigate(-1);
      }
    })();
  }, [formData?.routeId]);
  function handleSubmit() {
    return new Promise((resolve) => {
      setTimeout(() => {
        // add
        const newData: any = {
          seats: [
            formData?.seatId
          ],
          routeId: formData?.routeId,
          userId: formData?.user?.data?.user?.id,
          status: "Chưa thanh toán",
          paymentInfo: "Thanh toán tại quầy"
        }
        console.log("huh?", newData);

        dispatch(orderActions.createOrder(newData));
        resolve(true);
      }, 1000);
      setPage(page + 1);
    });
  }
  return (
    <FormProvider {...methods}>
      <Container maxWidth="lg" >
        <Box sx={{ bgcolor: '', height: '100vh' }}>
          <Container maxWidth="lg">
            <form autoComplete="off" onSubmit={handleSubmit} >
              <Grid container spacing={4}>
                <Grid item md={12}>
                  <Typography variant="h1" sx={{ mb: 2, lineHeight: "70px", fontStyle: "bold", }}>
                    THANH TOÁN
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={4}>
                <Grid item md={12}>
                  <Grid container >
                    <Grid item md={12}>
                      <TableContainer>
                        <Table style={{ height: "auto" }} >
                          <TableRow sx={{ height: "20px", bgcolor: "orange", alignItems: "center" }} >
                            <TableCell colSpan={3} sx={{ textAlign: "center", color: "white", fontSize: "21px" }}>
                              Thông tin mua vé</TableCell>
                          </TableRow>
                          <TableRow sx={{ height: "20px" }} >
                            <TableCell colSpan={3} sx={{ textAlign: "left", color: "black", fontSize: "21px" }}>
                              Thông tin khách hàng</TableCell>
                          </TableRow>
                          <TableRow style={{ height: "100px" }} >
                            <TableCell sx={{ textAlign: "left" }}>
                              <Typography sx={{ color: "black", fontSize: "15px" }}>
                                Họ tên: {formData?.user?.data?.user?.name}</Typography>
                              <Typography sx={{ color: "black", fontSize: "15px" }}>
                                Số điện thoại:  {formData?.user?.data?.user?.phone}</Typography>
                            </TableCell>
                          </TableRow>
                          <TableRow sx={{ height: "20px" }} >
                            <TableCell colSpan={3} sx={{ textAlign: "left", color: "black", fontSize: "21px" }}>
                              Thông tin chuyến: </TableCell>
                          </TableRow>
                          <TableRow style={{ height: "100px" }} >
                            <TableCell sx={{ textAlign: "left" }}>
                              <Typography sx={{ color: "black", fontSize: "15px" }}>
                                Tuyến xe: {route?.from_Id?.name + " - " + route?.to_Id?.name} </Typography>
                              <Typography sx={{ color: "black", fontSize: "15px" }}>
                                Thời gian:  {moment(route?.departure).format('DD/MM/YYYY') + " đến " + moment(route?.arival).format('DD/MM/YYYY')}</Typography>
                              <Typography sx={{ color: "black", fontSize: "15px" }}>
                                Số ghế: {formData?.seatName}</Typography>
                            </TableCell>
                          </TableRow>
                          <TableRow sx={{ height: "20px" }} >
                            <TableCell colSpan={3} sx={{ textAlign: "right", color: "black", fontSize: "21px" }}>
                              Tổng tiền: {route?.price}đ</TableCell>
                          </TableRow>
                        </Table>
                      </TableContainer>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Typography variant="h5" sx={{ mb: 2, lineHeight: "70px", fontStyle: "bold", }}>
                CHỌN CÁCH THANH TOÁN
              </Typography>
              <Grid container spacing={4}>
                <Grid item md={12}>
                  <Grid container spacing={6}>
                    <Grid item md={6}>
                      <Box sx={{ height: "200px", weight: "100px", border: 1 }}>
                        Thanh toán bằng thẻ nội địa
                      </Box>
                    </Grid>
                    <Grid item md={6}>
                      <Box sx={{ height: "200px", weight: "100px", border: 1 }}>
                        Thanh toán bằng thẻ quốc tế
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Stack sx={{ marginTop: "10px" }} direction="row-reverse" spacing={2}>
                <Button type='submit' variant="contained" color="primary" startIcon={<ArrowForwardIcon />} sx={{ ml: 1 }}>
                  Thanh toán
                </Button>
                <Button variant="contained" color="primary" startIcon={<ArrowBackIcon />} sx={{ ml: 1 }}>
                  Quay lại
                </Button>
              </Stack>
            </form>
          </Container>
        </Box>
      </Container >
    </FormProvider >
  );
}

