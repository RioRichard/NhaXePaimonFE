import { Box, Stack } from '@mui/material';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import routeApi from '../../../api/routeApi';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import RouteForm from '../componets/RouteForm';
import { routesActions, selectRoutesError, selectRoutesStatus } from '../RoutesSlice';
import { Routes } from '../types';
import { Response } from '../../../model';
import { Notification } from '../../../components/Common';
import { baseActions, selectBasesList } from '../../Base/BaseSlice';
import { busActions, selectBusList } from '../../Bus/BusSlice';

export default function AddEdit() {
    const dispatch = useAppDispatch();
    /*  const navigate = useNavigate(); */
    const { routeId } = useParams<{ routeId: string }>();
    const [notify, setNotify] = React.useState({
        isOpen: false,
        message: '',
        type: 'success'
    });
    const [loading, setLoading] = React.useState<boolean>(false);
    const [routes, setRoutes] = React.useState<Routes>();
    const isEditMode = Boolean(routeId);
    const status = useAppSelector(selectRoutesStatus);
    const error = useAppSelector(selectRoutesError);
    const listBus: any = useAppSelector(selectBusList)
    const listBase: any = useAppSelector(selectBasesList);
    // dispatch fetch list
    React.useEffect(() => {
        dispatch(baseActions.fetchBases({}));
    }, []);
    React.useEffect(() => {
        dispatch(busActions.fetchBus({}));
    }, []);
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
        if (!routeId) return;
        (async () => {
            try {
                const response: Response<Routes> = await routeApi.fetchRoutesById(routeId);
                const routesData: any = response.data;
                setRoutes(routesData.routes);
            } catch (error) {
                // navigate(-1);
            }
        })();
    }, [routeId]);



    const handleSubmit = (values: Routes) => {
        console.log("value", values);

        return new Promise((resolve) => {
            setTimeout(() => {
                if (isEditMode) {
                    // edit
                    const tempDeparture = new Date(values.departure?.value ? values.departure?.value : values.departure);
                    const departure = tempDeparture.toISOString().slice(0, 19).replace('T', ' ');

                    const tempArrival = new Date(values.arrival?.value ? values.arrival?.value : values.arrival);
                    const arrival = tempArrival.toISOString().slice(0, 19).replace('T', ' ');

                    const newData: any = {
                        id: routeId,
                        departure: departure,
                        arrival: arrival,
                        bus: values.bus?.id,
                        fromId: values.from?.id,
                        toId: values.to?.id,
                        price: values.price,
                    }


                    dispatch(routesActions.updateRoutes(newData));
                } else {
                    // add
                    const tempDeparture = new Date(values.departure?.value);
                    const departure = tempDeparture.toISOString().slice(0, 19).replace('T', ' ');

                    const tempArrival = new Date(values.arrival?.value);
                    const arrival = tempArrival.toISOString().slice(0, 19).replace('T', ' ');

                    const newData: any = {
                        departure: departure,
                        arrival: arrival,
                        bus: values.bus?.id,
                        fromId: values.from?.id,
                        toId: values.to?.id,
                        price: values.price,
                    }
                    console.log(departure);
                    dispatch(routesActions.createRoutes(newData));
                }
                resolve(true);
            }, 1000);
        });
    };
    const initialValues = isEditMode ? routes && routes : undefined;
    if (listBase?.bases && listBus?.buses) {
        return (
            <Stack spacing={4}>
                {(!isEditMode || Boolean(routes)) && (
                    <Box sx={{ width: '60%', backgroundColor: '#fff', p: 3 }}>
                        <RouteForm
                            isEditMode={isEditMode}
                            initialValues={initialValues}
                            onSubmit={handleSubmit}
                            listBase={listBase?.bases}
                            listBus={listBus?.buses} />
                    </Box>
                )}
                <Notification notify={notify} setNotify={setNotify} />
            </Stack>
        );
    }
    else {
        return <>
        </>
    }
}

