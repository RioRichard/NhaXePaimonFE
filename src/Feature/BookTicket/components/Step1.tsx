
import { SelectSearchField } from '../../../custom-fields/SelectSearchField';
import { FormProvider, useForm } from 'react-hook-form';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Typography, Grid, Container, Stack, Button, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import moment from 'moment';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';
import { useQueryParams } from '../../Hooks';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import React from 'react';
import { IParams } from '../../../model';
import { selectBasesList } from '../../Base/BaseSlice';
import { baseActions } from '../../Base/BaseSlice';
import { SelectoptionValue } from '../../../custom-fields/SelectOptionValue';
export default function Step1(props: { onSubmit: any, page: any, setPage: any, formData: any, setFormData: any }) {
    const { onSubmit, page, setPage, formData, setFormData } = props;
    const dispatch = useAppDispatch();
    const { queryParams } = useQueryParams<IParams>();
    const methods = useForm<any>({
    });
    const {
        watch,
    } = methods;
    function handleSubmit() {
        setFormData({
            ...formData,
            from_id:departure?.id,
            to_id:destination?.id,
            departure:dateStart
        })
        setPage(page + 1);
    }
    //use watch to check the value in SelectField
    const departure = watch('departure');
    const destination = watch('destination');
    const dateStart = watch('dateStart');
    var indents: any = [];
    for (var i = 0; i < 5; i++) {
        indents.push(moment().add(i, 'days').format("DD-MM-YYYY"));
    }
    // connect store
    const listBase: any = useAppSelector(selectBasesList);
    console.log("listBase",listBase);
    
    // dispatch fetch list
    React.useEffect(() => {
        dispatch(baseActions.fetchBases(queryParams));
    }, [queryParams]);
    return (
        <FormProvider {...methods}>
            <Container maxWidth="lg" >
                <Box sx={{ bgcolor: '', height: '100vh' }}>
                    <Container maxWidth="lg">
                        <form onSubmit={handleSubmit} autoComplete="off">
                            <Grid container spacing={4}>
                                <Grid item md={12}>
                                    <Typography variant="h5" sx={{ mb: 2, lineHeight: "70px", fontStyle: "bold", }}>
                                        HỢP ĐỒNG/ MUA VÉ TRỰC TUYẾN
                                    </Typography>
                                    <Grid container spacing={8}>
                                        <Grid item md={6}>
                                            <SelectSearchField name="departure" label="Chọn điểm đi *" options={listBase?.bases} />
                                        </Grid>
                                        <Grid item md={6}>
                                            <SelectSearchField name="destination" label="Chọn điểm đến *" options={listBase?.bases} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                defaultValue="oneWay"
                            >
                                <FormControlLabel value="oneWay" control={<Radio />} label="Một chiều" />
                                <FormControlLabel value="cycle" control={<Radio />} label="Khứ hồi" disabled />
                            </RadioGroup>
                            <Grid container spacing={4}>
                                <Grid item md={12}>
                                    <Grid container spacing={6}>
                                        <Grid item md={6}>
                                            <TableContainer>
                                                <Table style={{ height: "auto" }} >
                                                    <TableRow sx={{ height: "50px", bgcolor: "#0e9694", alignItems: "center" }} >
                                                        <TableCell colSpan={3} sx={{ textAlign: "center", color: "white", fontSize: "21px" }}>
                                                            Điện thoại hợp đồng \ Đặt vé:</TableCell>
                                                    </TableRow>
                                                    <TableRow style={{ height: "200px" }} >
                                                        <TableCell sx={{ textAlign: "center" }}>
                                                            <Typography sx={{ color: "black", fontSize: "18px" }}>
                                                                SÀI GÒN  </Typography>
                                                            <Typography sx={{ color: "red", fontSize: "18px" }}>
                                                                1900 XXXX
                                                            </Typography>
                                                        </TableCell>
                                                        <TableCell sx={{ textAlign: "center" }}>
                                                            <Typography sx={{ color: "black", alignItems: "center", fontSize: "18px" }}>
                                                                ĐÀ LẠT  </Typography>
                                                            <Typography sx={{ color: "red", alignItems: "center", fontSize: "18px" }}>
                                                                1900 XXXX
                                                            </Typography>
                                                        </TableCell>
                                                        <TableCell sx={{ textAlign: "center" }}>
                                                            <Typography sx={{ color: "black", fontSize: "18px" }}>
                                                                VŨNG TÀU  </Typography>
                                                            <Typography sx={{ color: "red", fontSize: "18px" }}>
                                                                1900 XXXX
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                </Table>
                                            </TableContainer>
                                        </Grid>
                                        <Grid item md={6}>
                                            <TableContainer>
                                                <Table style={{ height: "auto" }} >
                                                    <TableRow sx={{ height: "50px", bgcolor: "#0e9694" }} >
                                                        <TableCell sx={{ verticalAlign: "middle", textAlign: "center", color: "white", fontSize: "21px", fontStyle: "bold" }}>
                                                            HỖ TRỢ HỢP ĐỒNG MUA VÉ XE TRỰC TUYẾN</TableCell>
                                                    </TableRow>
                                                    <TableRow style={{ height: "100px" }} >
                                                        <TableCell sx={{ verticalAlign: "middle" }}>
                                                            <Stack direction="row" spacing={2} sx={{ alignItems: "center", justifyContent: "center" }}>
                                                                <Typography sx={{ color: "black", alignItems: "center", fontSize: "20px" }}>SÀI GÒN - ĐÀ LẠT - VŨNG TÀU: </Typography>
                                                                <Typography sx={{ color: "red", alignItems: "center", fontSize: "20px" }}>1900 1060</Typography>
                                                            </Stack>
                                                        </TableCell>
                                                    </TableRow>
                                                    <TableRow style={{ height: "100px" }} >
                                                        <TableCell sx={{ verticalAlign: "middle" }}>
                                                            <Stack direction="row" spacing={2} sx={{ alignItems: "center", justifyContent: "center" }}>
                                                                <Typography sx={{ color: "green", alignItems: "center", fontSize: "20px" }}>HOTLINE: </Typography>
                                                                <Typography sx={{ color: "red", alignItems: "center", fontSize: "20px" }}>0389 897 XXX</Typography>
                                                            </Stack>
                                                        </TableCell>
                                                    </TableRow>
                                                </Table>
                                            </TableContainer>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Stack direction="row-reverse" spacing={2} sx={{ marginTop: "15px" }}>
                                <Button type='submit' variant="contained" color="primary" startIcon={<ArrowForwardIcon />} disabled={(destination && departure) ? false : true} sx={{ ml: 1 }}>
                                    Tiếp tục
                                </Button>
                            </Stack>
                        </form>
                    </Container>
                </Box>
            </Container >
        </FormProvider >
    );

}