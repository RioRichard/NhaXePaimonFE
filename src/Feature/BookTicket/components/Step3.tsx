import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { FormProvider, useForm } from 'react-hook-form';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Button, Box, FormControlLabel, Radio, ButtonGroup, ToggleButton, Checkbox } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { SelectSearchField } from '../../../custom-fields/SelectSearchField';
import { RadioField, InputField, CheckboxField } from '../../../custom-fields';
import { Link } from 'react-router-dom';
import { Routes } from '../../Routes/types';
import { useQueryParams } from '../../Hooks';
import { IParams } from '../../../model';
import { routesActions, selectRoutesList } from '../../Routes/RoutesSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import moment from 'moment';
import { Response } from '../../../model';
import routeApi from '../../../api/routeApi';
import { authActions, selectIsUser } from '../../auth/authSlice';
import storage from '../../../utils/storage';
import authApi from '../../../api/authApi';


export default function Step3(props: { onSubmit: any, page: any, setPage: any, formData: any, setFormData: any }) {
    const dispatch = useAppDispatch();
    const currentUser = useAppSelector(selectIsUser);
    const isLoggedIn = Boolean(storage.getAccessToken());

    const { onSubmit, page, setPage, formData, setFormData } = props;
    const { queryParams, updateParams } = useQueryParams<IParams>();
    const [route, setRoute] = React.useState<any>();
    const [routeId, setRouteId] = React.useState<any>();
    const [selectedRoute, setSelectedRoute] = React.useState<any>();
    const [selected, setSelected] = React.useState(false);
    const [count, setCount] = React.useState(0);
    const [selectedSeat, setSelectedSeat] = React.useState<any>();
    const [selectedSeatname, setSelectedSeatName] = React.useState<any>();
    const [chosen, setChose] = React.useState(false);
    const methods = useForm<any>({
        // defaultValues: initialValues,
        // resolver: yupResolver(validationSchema)
    });
    const {
        watch,
    } = methods;
    const status = [
        { id: 'GiN', name: 'Thường' },
        { id: 'GhN', name: 'VIP' },
    ];
    const [alignment, setAlignment] = React.useState('web');
    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };
    const param: IParams = {
        ...queryParams,
        fromId: formData?.from_id,
        toId: formData?.to_id,
    }
    React.useEffect(() => {
        dispatch(routesActions.fetchRoutes(param));
    }, [queryParams]);
    React.useEffect(() => {
        (async () => {
            if (isLoggedIn && !currentUser) {
                const user = await authApi.getMe();
                dispatch(authActions.setMe(user));
            }
        })();
        
    }, [dispatch, isLoggedIn]);
    const isUser: any = useAppSelector(selectIsUser);
    const routes: any = useAppSelector(selectRoutesList);
    
    // const r1 = routes?.routes[0]?.bus?.seats;
    React.useEffect(() => {
        setRoute(
            routes?.routes?.map((item: any) => {
                return {
                    ...item,
                };
            })
        );
        setCount(routes?.routes?.length)
    }, [routes?.routes]);
    const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRouteId(event.target.value)
        if (event.target.checked === true) {
            setSelected(true);
        }
    }
    const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedSeat(event.target.value)
        setSelectedSeatName(event.target.name)
        setChose(true);
    }
    React.useEffect(() => {
        if (!routeId) return;
        (async () => {
            try {
                const response: Response<Routes> = await routeApi.fetchRoutesById(routeId);
                const routesData: any = response.data;
                setSelectedRoute(routesData.routes);
            } catch (error) {
                // navigate(-1);
            }
        })();
    }, [routeId]);
    function handleSubmit() {
        setFormData({
            ...formData,
            seatId: selectedSeat,
            routeId: routeId,
            seatName: selectedSeatname,
            user:isUser
        })
        setPage(page + 1);
    }
    console.log(route);
    
    return (
        <>
            {count === 0 ?
                <Box>
                    <h1>Không tìm thấy tuyến phù hợp</h1>
                    <Link to="/" style={{ textDecoration: 'none' }} >
                        <Button variant="contained" color="secondary" startIcon={<BackspaceIcon />} sx={{ ml: 1 }}>
                            Trở về
                        </Button>
                    </Link>
                </Box>
                : <FormProvider {...methods}>
                    <Container maxWidth="lg">
                        <Box sx={{ height: '100vh' }} >
                            <Container maxWidth="lg">
                                <form onSubmit={handleSubmit} autoComplete="off">
                                    <h2 style={{ borderBottom: "#C1C1C1 1px solid", lineHeight: "60px" }} >Chọn Ghế</h2>
                                    <Box sx={{ width: '100%' }}>
                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item md={4}>
                                                <Typography align='left' fontSize={'16px'} fontWeight={'bold'}>Từ ... đến ...</Typography>
                                                {route?.map((item: any) => (
                                                    // <CheckboxField /* value={true} */ name="route" label="Admin" />
                                                    <Checkbox disabled={selected} onChange={handleChanges} value={item?._id} key={item?._id} name='d' icon={<Button variant="outlined">{moment(item?.departure).format('DD/MM/YYYY') + ' - ' + moment(item?.arrival).format('DD/MM/YYYY')}</Button>} checkedIcon={<Button variant="contained">{moment(item?.departure).format('DD/MM/YYYY') + ' - ' + moment(item?.arrival).format('DD/MM/YYYY')}</Button>} />
                                                ))
                                                }
                                                <Typography align='left' fontSize={'16px'}>Nơi lên xe</Typography>
                                                <RadioField name="inplace" label="">
                                                    <FormControlLabel value="1" control={<Radio />} label="Bến" />
                                                    <FormControlLabel value="2" control={<Radio />} label="Trạm" />
                                                </RadioField>
                                                <Typography align='left' fontSize={'16px'}>Nơi xuống xe</Typography>
                                                <RadioField name="outplace" label="">
                                                    <FormControlLabel value="1" control={<Radio />} label="Bến" />
                                                    <FormControlLabel value="2" control={<Radio />} label="Trạm" />
                                                </RadioField>
                                                <Typography align='left' fontSize={'16px'}>Yêu cầu bổ sung</Typography>
                                                <InputField name="description" label="" multiline rows={3} />
                                            </Grid>

                                            <Grid height={'100px'} item md={3} container columnSpacing={1}>
                                                {selectedRoute?.bus_id?.seats?.map((item: any) => (
                                                    <Checkbox disabled={chosen} onChange={handleSelect} name={item?.name} key={item?._id} value={item?._id} icon={<Button disabled={chosen} style={{ maxWidth: "10px" }} variant="outlined">{item?.name}</Button>} checkedIcon={<Button style={{ maxWidth: "10px" }} variant="contained">{item?.name}</Button>} />
                                                ))
                                                }
                                            </Grid>
                                            <Grid item md={5}>
                                                <Stack direction={'column'} spacing={2} sx={{ backgroundColor: '#f5f5f5', alignItems: 'center' }}>
                                                    <h2 style={{ borderBottom: "#C1C1C1 1px solid", lineHeight: "60px", width: '80%' }} >Chi tiết vé</h2>
                                                    <Stack direction="row" spacing={3} sx={{ justifyContent: 'center' }}>
                                                        <Typography align='right' fontSize={'16px'}>Họ và tên:</Typography>
                                                        <Typography align='left' color={'red'} fontSize={'15px'}>{isUser?.data?.user.name}</Typography>
                                                    </Stack>
                                                    <Stack direction="row" spacing={3}>
                                                        <Typography align='right' fontSize={'16px'}>Điện thoại:</Typography>
                                                        <Typography align='left' color={'red'} fontSize={'15px'}>{isUser?.data?.user.phone}</Typography>
                                                    </Stack>
                                                    <Stack direction="row" spacing={3}>
                                                        <Typography align='right' fontSize={'16px'}>Nơi khởi hành:</Typography>
                                                        <Typography align='left' color={'red'} fontSize={'15px'}>{selectedRoute?.from_Id?.address}</Typography>
                                                    </Stack>
                                                    <Stack direction="row" spacing={3}>
                                                        <Typography align='right' fontSize={'16px'}>Nơi xuống xe:    </Typography>
                                                        <Typography align='left' color={'red'} fontSize={'15px'}>{selectedRoute?.to_Id?.address}</Typography>
                                                    </Stack>
                                                    <Stack direction="row" spacing={3}>
                                                        <Typography align='right' fontSize={'16px'}>Giờ khởi hành: </Typography>
                                                        <Typography align='left' color={'red'} fontSize={'15px'}>{moment(selectedRoute?.arrival).format('DD/MM/YYYY')}</Typography>
                                                    </Stack>
                                                    <Stack direction="row" spacing={3}>
                                                        <Typography align='left' fontSize={'16px'}>Số xe:    </Typography>
                                                        <Typography align='left' color={'red'} fontSize={'15px'}>{selectedRoute?.bus_id?.bus_number}</Typography>
                                                    </Stack>
                                                    <Stack direction="row" spacing={3}>
                                                        <Typography align='left' fontSize={'16px'}>Loại xe:    </Typography>
                                                        <Typography align='left' color={'red'} fontSize={'15px'}>{selectedRoute?.bus_id?.type}</Typography>
                                                    </Stack>
                                                    <Stack direction="row" spacing={3}>
                                                        <Typography align='left' fontSize={'16px'}>Số ghế:    </Typography>
                                                        <Typography align='left' color={'red'} fontSize={'15px'}>{selectedSeatname}</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                        <Stack direction="row-reverse" spacing={2}>
                                            <Button type='submit' variant="contained" color="primary" startIcon={<ArrowForwardIcon />} sx={{ ml: 1 }}>
                                                Hoàn tất chọn vé
                                            </Button>
                                            <Link to="/" style={{ textDecoration: 'none' }} >
                                                <Button variant="contained" color="secondary" startIcon={<BackspaceIcon />} sx={{ ml: 1 }}>
                                                    Trở về
                                                </Button>
                                            </Link>

                                        </Stack>

                                    </Box>
                                </form>

                            </Container>
                        </Box>
                    </Container>
                </FormProvider>}

        </>

    )
}


