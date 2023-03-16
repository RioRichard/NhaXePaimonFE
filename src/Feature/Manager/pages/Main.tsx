import * as React from 'react';
import ManagerList from '../componets/ManagerList';
import Stack from '@mui/material/Stack';
import ManagerAction from '../componets/ManagerAction';
import { Manager } from '../types';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useQueryParams } from '../../Hooks';
import { managerActions, selectManagersList, selectManagerError, selectManagersuccess, selectManagerStatus } from '../managerSlice';
import { IParams, MessageProps} from '../../../model';

export default function Main() {
    const dispatch = useAppDispatch();
    const [managers, setManagers] = React.useState<Manager[]>([]);
    const { queryParams, updateParams } = useQueryParams<IParams>();
    

    // connect store
    const listManagers : any = useAppSelector(selectManagersList);
    const error = useAppSelector(selectManagerError);
    const success = useAppSelector(selectManagersuccess);
    const status = useAppSelector(selectManagerStatus);
    // dispatch fetch list
    const [notify, setNotify] = React.useState<MessageProps>({
        isOpen: false,
        message: '',
        type: 'success'
    });
    React.useEffect(() => {
        dispatch(managerActions.fetchManagers(queryParams));
    }, [queryParams]);
    React.useEffect(() => {
        setManagers(
            listManagers?.managers?.map((item : any) => {
                return {
                    ...item,
                };
            })
        );
    }, [listManagers?.managers]);
    console.log("listManagers",listManagers?.managers) 

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
    return (
        <Stack >
            <ManagerAction></ManagerAction>
            <ManagerList
                rows={managers}></ManagerList>
        </Stack>
    )
}