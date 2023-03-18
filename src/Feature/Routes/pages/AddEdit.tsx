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

export default function AddEdit() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { routeId } = useParams<{ routeId: string }>();
    const [notify, setNotify] = React.useState({
        isOpen: false,
        message: '',
        type: 'success'
    });
    const [routes, setRoutes] = React.useState<Routes>();
    const isEditMode = Boolean(routeId);
    const status = useAppSelector(selectRoutesStatus);
    const error = useAppSelector(selectRoutesError);

    React.useEffect(() => {
        if (!routeId) return;
        (async () => {
            try {
                const response: Response<any> = await routeApi.fetchRoutesById(routeId);
                setRoutes(response.data.staffs);
            } catch (error) {
                // navigate(-1);
            }
        })();
    }, [routeId]);

    React.useEffect(() => {
        if (status === 'error' && error) {
            setNotify({
                isOpen: true,
                message: error,
                type: 'error'
            });
        }
    }, [status, error]);

    const handleSubmit = (values: Routes) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (isEditMode) {
                    // edit
                    dispatch(routesActions.updateRoutes(values));
                } else {
                    // add
                    dispatch(routesActions.createRoutes(values));
                }
                resolve(true);
            }, 1000);
        });
    };
    const initialValues = isEditMode ? routes && routes : undefined;
    return (
        <Stack spacing={4}>
            {(!isEditMode || Boolean(routes)) && (
                <Box sx={{ width: '60%', backgroundColor: '#fff', p: 3 }}>
                    <RouteForm isEditMode={isEditMode} initialValues={initialValues} onSubmit={handleSubmit} />
                </Box>
            )}
            <Notification notify={notify} setNotify={setNotify} />
        </Stack>
    );
}
