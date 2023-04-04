import * as React from 'react';
import UserList from '../componets/UserList';
import Stack from '@mui/material/Stack';
import UserAction from '../componets/UserAction';
import { User } from '../types';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useQueryParams } from '../../Hooks';
import { userActions, selectUsersList, selectUserError, selectUsersuccess, selectUserStatus } from '../userSlice';
import { IParams, MessageProps, ConfirmDialogProps } from '../../../model';
import { useLocation, useNavigate } from 'react-router-dom';
import { Notification, ConfirmDialog } from '../../../components/Common';
import userApi from '../../../api/userApi';

export default function Main() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [users, setUsers] = React.useState<User[]>([]);
    const { queryParams, updateParams } = useQueryParams<IParams>();


    // connect store
    const listUsers: any = useAppSelector(selectUsersList);
    const error: any = useAppSelector(selectUserError);
    const success: any = useAppSelector(selectUsersuccess);
    const status = useAppSelector(selectUserStatus);
    // dispatch fetch list
    const [notify, setNotify] = React.useState<MessageProps>({
        isOpen: false,
        message: '',
        type: 'success'
    });
    const [confirmDialog, setConfirmDialog] = React.useState<ConfirmDialogProps>({
        isOpen: false,
        title: '',
        subTitle: '',
        onConfirm: () => { }
    });
    React.useEffect(() => {
        dispatch(userActions.fetchUsers(queryParams));
    }, [queryParams]);
    React.useEffect(() => {
        setUsers(
            listUsers?.users?.map((item: any) => {
                return {
                    ...item,
                };
            })
        );
    }, [listUsers?.users]);
    console.log("listUsers", listUsers?.users)

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
    // handle edit
    const handleUserEditClick = (users: User) => {
        navigate(`${location.pathname}/${users.id}`);
    };
    //handle delete
    const handleUserDeleteClick = (users: User) => {
        setConfirmDialog({
            isOpen: true,
            title: `Xóa User "${users.id} "`,
            subTitle: ` Bạn không thể hoàn tác thao tác này!!!`,
            onConfirm: async () => {
                setConfirmDialog({
                    ...confirmDialog,
                    isOpen: false
                });
                try {
                    const response = await userApi.deleteUser(users); 
                    setNotify({
                        isOpen: true,
                        message: response.message as string,
                        type: 'success'
                    });

                    // Trigger to re-fetch asset group list with current option
                    dispatch(userActions.fetchUsers(queryParams));
                } catch (error) {
                    setNotify({
                        isOpen: true,
                        message: error as string,
                        type: 'error'
                    });
                }
            }
        });
    };

    return (
        <Stack >
            {/* Action */}
            <UserAction
                count={users?.length}
            ></UserAction>
            {/* List Table */}
            <UserList
                rows={users}
                onUserEditClick={handleUserEditClick}
                onUserDeleteClick={handleUserDeleteClick}
            ></UserList>
            {/* Notification */}
            <Notification notify={notify} setNotify={setNotify} />
            {/* Dialog confirm before delete data */}
            <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
        </Stack>
    )
}