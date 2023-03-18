
import { Box, Stack} from '@mui/material';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import busesApi from '../../../api/busApi';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { busActions, selectBusError, selectBusStatus } from '../BusSlice';
import BusForm from '../componets/BusForm';
import { Bus } from '../types';
import { Response } from '../../../model';
import { Notification } from '../../../components/Common';

export default function AddEdit() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { busId } = useParams<{ busId: string }>();
    const [notify, setNotify] = React.useState({
        isOpen: false,
        message: '',
        type: 'success'
    });
    const [bus, setBus] = React.useState<Bus>();
    const isEditMode = Boolean(busId);
    const status = useAppSelector(selectBusStatus);
    const error = useAppSelector(selectBusError);

    React.useEffect(() => {
        if (!busId) return;
        (async () => {
            try {
                const response: Response<any> = await busesApi.fetchBusById(busId);
                setBus(response.data.buses);
            } catch (error) {
                // navigate(-1);
            }
        })();
    }, [busId]);

    React.useEffect(() => {
        if (status === 'error' && error) {
            setNotify({
                isOpen: true,
                message: error,
                type: 'error'
            });
        }
    }, [status, error]);

    const handleSubmit = (values: Bus) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (isEditMode) {
                    // edit
                    dispatch(busActions.updateBus(values));
                } else {
                    // add
                    dispatch(busActions.createBus(values));
                }
                resolve(true);
            }, 1000);
        });
    };
    const initialValues = isEditMode ? bus && bus : undefined;
    return (
        <Stack spacing={4}>
                {(!isEditMode || Boolean(bus)) && (
                <Box sx={{ width: '60%', backgroundColor: '#fff', p: 3 }}>
                    <BusForm isEditMode={isEditMode} initialValues={initialValues} onSubmit={handleSubmit} />
                </Box>
            )}
            <Notification notify={notify} setNotify={setNotify} />
        </Stack>
        
    );
}
