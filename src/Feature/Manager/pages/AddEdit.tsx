
import React from 'react';
import { Box, Stack } from '@mui/material';
import ManagerForm from '../componets/ManagerForm';
import managerApi from '../../../api/managerApi';
import { useParams } from 'react-router-dom';
import { Manager } from '../types';
import { Response } from '../../../model';
import { managerActions } from '../managerSlice';
import { useDispatch } from 'react-redux';


export default function AddEdit() {
    const dispatch = useDispatch();
    const { managerId } = useParams<{ managerId: string }>();
    const [managers, setManagers] = React.useState<Manager>();

    React.useEffect(() => {
        if (!managerId) return;
        (async () => {
            try {
                const response: Response<any> = await managerApi.fetchManagerById(managerId);
                setManagers(response.data.managers);
            } catch (error) {
            }
        })();
    }, [managerId]);

    const handleSubmit = (values: Manager) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (isEditMode) {
                    // edit
                    dispatch(managerActions.updateManager(values));
                } else {
                    // add
                    dispatch(managerActions.createManager(values));
                }
                resolve(true);
            }, 1000);
        });
    };

    const isEditMode = Boolean(managerId);

    const initialValues = isEditMode ? managers && managers : undefined;
    return (
        <Stack spacing={4}>
            {(!isEditMode || Boolean(managers)) && (
                <Box sx={{ backgroundColor: '#fff', p: 3 }}>
                    <ManagerForm isEditMode={isEditMode} initialValues={initialValues!} onSubmit={handleSubmit} />
                </Box>
            )}
        </Stack>
    );
}
