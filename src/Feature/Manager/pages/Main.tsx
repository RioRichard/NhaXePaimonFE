import * as React from 'react';
import ManagerList from '../componets/ManagerList';
import Stack from '@mui/material/Stack';
import ManagerAction from '../componets/ManagerAction';
import { Manager } from '../types';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useQueryParams } from '../../Hooks';
import { managerActions, selectManagersList, selectManagerError, selectManagersuccess, selectManagerStatus } from '../managerSlice';
import { IParams, MessageProps, ConfirmDialogProps } from '../../../model';
import { useLocation, useNavigate } from 'react-router-dom';
import { Notification, ConfirmDialog } from '../../../components/Common';
import managerApi from '../../../api/managerApi';

export default function Main() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [managers, setManagers] = React.useState<Manager[]>([]);
    const { queryParams, updateParams } = useQueryParams<IParams>();


    // connect store
    const listManagers: any = useAppSelector(selectManagersList);
    const error = useAppSelector(selectManagerError);
    const success = useAppSelector(selectManagersuccess);
    const status = useAppSelector(selectManagerStatus);
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
        dispatch(managerActions.fetchManagers(queryParams));
    }, [queryParams]);
    React.useEffect(() => {
        setManagers(
            listManagers?.managers?.map((item: any) => {
                return {
                    ...item,
                };
            })
        );
    }, [listManagers?.managers]);
    console.log("listManagers", listManagers?.managers)

    // show message
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
        if (status === 'success' && success) {
            setNotify({
                isOpen: true,
                message: success,
                type: 'success'
            });
        }
    }, [status, success]);
    // handle edit
    const handleManagerEditClick = (managers: Manager) => {
        navigate(`${location.pathname}/${managers.id}`);
    };
    //handle delete
    const handleManagerDeleteClick = (managers: Manager) => {
        setConfirmDialog({
            isOpen: true,
            title: `Xóa Manager "${managers.id} "`,
            subTitle: ` Bạn không thể hoàn tác thao tác này!!!`,
            onConfirm: async () => {
                setConfirmDialog({
                    ...confirmDialog,
                    isOpen: false
                });
                try {
                    const response = await managerApi.deleteManager(managers); 
                    setNotify({
                        isOpen: true,
                        message: response.message as string,
                        type: 'success'
                    });

                    // Trigger to re-fetch asset group list with current option
                    dispatch(managerActions.fetchManagers(queryParams));
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
            <ManagerAction
                count={managers?.length}
            ></ManagerAction>
            {/* List Table */}
            <ManagerList
                rows={managers}
                onManagerEditClick={handleManagerEditClick}
                onManagerDeleteClick={handleManagerDeleteClick}
            ></ManagerList>
            {/* Notification */}
            <Notification notify={notify} setNotify={setNotify} />
            {/* Dialog confirm before delete data */}
            <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
        </Stack>
    )
}