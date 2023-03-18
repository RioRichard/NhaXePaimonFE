
import { Box, Stack} from '@mui/material';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import staffApi from '../../../api/staffApi';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { staffActions, selectStaffError, selectStaffStatus } from '../StaffSlice';
import BaseForm from '../componets/StaffForm';
import { Staff } from '../types';
import { Response } from '../../../model';
import { Notification } from '../../../components/Common';
import StaffForm from '../componets/StaffForm';

export default function AddEdit() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { staffId } = useParams<{ staffId: string }>();
    const [notify, setNotify] = React.useState({
        isOpen: false,
        message: '',
        type: 'success'
    });
    const [staff, setStaff] = React.useState<Staff>();
    const isEditMode = Boolean(staffId);
    const status = useAppSelector(selectStaffStatus);
    const error = useAppSelector(selectStaffError);

    React.useEffect(() => {
        if (!staffId) return;
        (async () => {
            try {
                const response: Response<any> = await staffApi.fetchStaffById(staffId);
                setStaff(response.data.staffs);
            } catch (error) {
                // navigate(-1);
            }
        })();
    }, [staffId]);

    React.useEffect(() => {
        if (status === 'error' && error) {
            setNotify({
                isOpen: true,
                message: error,
                type: 'error'
            });
        }
    }, [status, error]);

    const handleSubmit = (values: Staff) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (isEditMode) {
                    // edit
                    dispatch(staffActions.updateStaff(values));
                } else {
                    // add
                    dispatch(staffActions.createStaff(values));
                }
                resolve(true);
            }, 1000);
        });
    };
    const initialValues = isEditMode ? staff && staff : undefined;
    return (
        <Stack spacing={4}>
                {(!isEditMode || Boolean(staff)) && (
                <Box sx={{ width: '60%', backgroundColor: '#fff', p: 3 }}>
                    <StaffForm isEditMode={isEditMode} initialValues={initialValues} onSubmit={handleSubmit} />
                </Box>
            )}
            <Notification notify={notify} setNotify={setNotify} />
        </Stack>
        
    );
}
