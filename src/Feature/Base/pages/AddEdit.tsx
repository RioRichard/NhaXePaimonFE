
import { Box, Stack} from '@mui/material';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import basesApi from '../../../api/baseApi';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { baseActions, selectBasesError, selectBasesStatus } from '../BaseSlice';
import BaseForm from '../componets/BaseForm';
import { Base } from '../types';
import { Response } from '../../../model';
import { Notification } from '../../../components/Common';

export default function AddEdit() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { baseId } = useParams<{ baseId: string }>();
    const [notify, setNotify] = React.useState({
        isOpen: false,
        message: '',
        type: 'success'
    });
    const [base, setBase] = React.useState<Base>();
    const isEditMode = Boolean(baseId);
    const status = useAppSelector(selectBasesStatus);
    const error = useAppSelector(selectBasesError);

    React.useEffect(() => {
        if (!baseId) return;
        (async () => {
            try {
                const response: Response<any> = await basesApi.fetchBaseById(baseId);
                setBase(response.data.bases);
            } catch (error) {
                // navigate(-1);
            }
        })();
    }, [baseId]);

    React.useEffect(() => {
        if (status === 'error' && error) {
            setNotify({
                isOpen: true,
                message: error,
                type: 'error'
            });
        }
    }, [status, error]);

    const handleSubmit = (values: Base) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (isEditMode) {
                    // edit
                    dispatch(baseActions.updateBases(values));
                } else {
                    // add
                    dispatch(baseActions.createBases(values));
                }
                resolve(true);
            }, 1000);
        });
    };
    const initialValues = isEditMode ? base && base : undefined;
    return (
        <Stack spacing={4}>
                {(!isEditMode || Boolean(base)) && (
                <Box sx={{ width: '60%', backgroundColor: '#fff', p: 3 }}>
                    <BaseForm isEditMode={isEditMode} initialValues={initialValues} onSubmit={handleSubmit} />
                </Box>
            )}
            <Notification notify={notify} setNotify={setNotify} />
        </Stack>
        
    );
}
