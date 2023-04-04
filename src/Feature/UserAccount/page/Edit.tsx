
import React from 'react';
import { Box, Stack } from '@mui/material';
import UserOwnEditForm from '../components/UserOwnEditForm';
import managerApi from '../../../api/managerApi';
import { useParams } from 'react-router-dom';
import { User } from '../../User/types';
import { Response } from '../../../model';
import { userActions } from '../../User/userSlice';
import { useDispatch } from 'react-redux';
import { selectIsUser } from '../../auth/authSlice';
import { useAppSelector } from '../../../app/hooks';
import userApi from '../../../api/userApi';

export default function Edit() {
    const dispatch = useDispatch();
    const [user, setUser] = React.useState<User>();
    const currentUser: any = useAppSelector(selectIsUser);
    const userId = currentUser?.data?.user?.id

        React.useEffect(() => {
            if (!userId) return;
            (async () => {
                try {
                    const response: Response<any> = await userApi.fetchUserById(userId);
                    setUser(response.data.users);
                } catch (error) {
                }
            })();
        }, [userId]);

    const handleSubmit = (values: User) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                dispatch(userActions.updateOwnUser(values));
                resolve(true);
            }, 1000);
        });
    };

    const isEditMode = Boolean(userId);

    const initialValues = isEditMode ? user && user : undefined;
    return (
        <Stack spacing={4}>
            {(!isEditMode || Boolean(user)) && (
                <Box sx={{ backgroundColor: '#fff', p: 3 }}>
                    <UserOwnEditForm isEditMode={isEditMode} initialValues={initialValues!} onSubmit={handleSubmit} />
                </Box>
            )}
        </Stack>
    );
}
