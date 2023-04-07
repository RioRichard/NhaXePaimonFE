import * as React from 'react';
import UserInformationForm from '../components/UserInformationForm';
import HistoryPaymentForm from '../components/HistoryPaymentForm';
import Stack from '@mui/material/Stack';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { User } from '../../User/types';
import { authActions, selectIsUser } from '../../auth/authSlice';
import { useQueryParams } from '../../Hooks';
import { IParams, MessageProps } from '../../../model';
import { Notification } from '../../../components/Common';
import { userActions, selectUsersList, selectUserError, selectUsersuccess, selectUserStatus } from '../../User/userSlice';

export default function Main() {
    const dispatch = useAppDispatch()


    const { queryParams } = useQueryParams<IParams>();
    const currentUser: any = useAppSelector(selectIsUser);
    const currentUserOrder = currentUser?.data?.user?.orders;
    const currentUserInfo = currentUser?.data?.user;
    const error: any = useAppSelector(selectUserError);
    const success: any = useAppSelector(selectUsersuccess);
    const status = useAppSelector(selectUserStatus);

    // dispatch fetch list
    const [notify, setNotify] = React.useState<MessageProps>({
        isOpen: false,
        message: '',
        type: 'success'
    });

    // show message
    React.useEffect(() => {
        if (status === 'error' && error) {
            setNotify({
                isOpen: true,
                message: error?.message,
                type: 'error'
            });
        }
    }, [status, error]);

    React.useEffect(() => {
        if (status === 'success' && success) {
            setNotify({
                isOpen: true,
                message: success?.message,
                type: 'success'
            });
        }
    }, [status, success]);

    return (
        <Stack >
            <UserInformationForm rows={currentUserInfo!}></UserInformationForm>
            <HistoryPaymentForm rows={currentUserOrder!}></HistoryPaymentForm>
            {/* Notification */}
            <Notification notify={notify} setNotify={setNotify} />
        </Stack>

    )
}