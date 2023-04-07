
import React from 'react';
import { Box, Stack } from '@mui/material';
import UserForm from '../componets/UserForm';
import userApi from '../../../api/userApi';
import { useParams } from 'react-router-dom';
import { User } from '../types';
import { Response } from '../../../model';
import { userActions } from '../userSlice';
import { useDispatch } from 'react-redux';


export default function AddEdit() {
    const dispatch = useDispatch();
    const { userId } = useParams<{ userId: string }>();
    const [users, setUsers] = React.useState<User>();

    React.useEffect(() => {
        if (!userId) return;
        (async () => {
            try {
                const response: Response<any> = await userApi.fetchUserById(userId);
                setUsers(response.data.users);
            } catch (error) {
            }
        })();
    }, [userId]);

    const handleSubmit = (values: User) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (isEditMode) {
                    const newData = {
                        _id: values._id,
                        email: values.email,
                        phone: values.phone,
                        name: values.name
                    };
                    dispatch(userActions.updateUser(newData));
                } else {
                    // add
                    dispatch(userActions.createUser(values));
                }
                resolve(true);
            }, 1000);
        });
    };

    const isEditMode = Boolean(userId);

    const initialValues = isEditMode ? users && users : undefined;
    return (
        <Stack spacing={4}>
            {(!isEditMode || Boolean(users)) && (
                <Box sx={{ backgroundColor: '#fff', p: 3 }}>
                    <UserForm isEditMode={isEditMode} initialValues={initialValues!} onSubmit={handleSubmit} />
                </Box>
            )}
        </Stack>
    );
}
