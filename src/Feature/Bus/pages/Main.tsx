import * as React from 'react';
import Stack from '@mui/material/Stack';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useQueryParams } from '../../Hooks';
import { ConfirmDialogProps, IParams, MessageProps } from '../../../model';
import { Bus } from '../types';
import { useLocation, useNavigate } from 'react-router-dom';
import basesApi from '../../../api/baseApi';
import { Notification,ConfirmDialog } from '../../../components/Common';
import { busActions, selectBusError, selectBusList, selectBusStatus, selectBusSuccess } from '../BusSlice';
import busesApi from '../../../api/busApi';
import BusAction from '../componets/BusAction';
import BusList from '../componets/BusList';

export default function Main() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [bus, setBus] = React.useState<Bus[]>([]);
    const { queryParams, updateParams } = useQueryParams<IParams>();

    // connect store
    const listBus: any = useAppSelector(selectBusList);
    const error = useAppSelector(selectBusError);
    const success = useAppSelector(selectBusSuccess);
    const status = useAppSelector(selectBusStatus);
    // dispatch fetch list
    const [notify, setNotify] = React.useState<MessageProps>({
        isOpen: false,
        message: '',
        type: 'success'
    });
    React.useEffect(() => {
        dispatch(busActions.fetchBus(queryParams));
    }, [queryParams]);
    React.useEffect(() => {
        setBus(
            listBus?.buses?.map((item: any) => {
                return {
                    ...item,
                };
            })
        );
    }, [listBus?.buses]);

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
    const [confirmDialog, setConfirmDialog] = React.useState<ConfirmDialogProps>({
        isOpen: false,
        title: '',
        subTitle: '',
        onConfirm: () => { }
    });
    const onBusEditClick = (bus: Bus) => {
        navigate(`${location.pathname}/${bus._id}`);
    };
    const onBusDeleteClick = (bus: Bus) => {
        console.log("del");
        
        setConfirmDialog({
            isOpen: true,
            title: `Xóa xe này ${bus.bus_number}`,
            subTitle: `Bạn có chắc chắn muốn xóa xe có biển số ${bus.bus_number}? <br/> Bạn không thể hoàn tác thao tác này!!!`,
            onConfirm: async () => {
                setConfirmDialog({
                    ...confirmDialog,
                    isOpen: false
                });

                try {
                    const response = await busesApi.deleteBus(bus);
                    setNotify({
                        isOpen: true,
                        message: response.message as string,
                        type: 'success'
                    });

                    // Trigger to re-fetch asset group list with current option
                    dispatch(busActions.fetchBus(queryParams));
                } catch (error: any) {
                    setNotify({
                        isOpen: true,
                        message: error.message,
                        type: 'error'
                    });
                }
            }
        });
    };
    
    return (
        <Stack >
            <BusAction count={bus?.length}/>
            <BusList
                rows={listBus?.buses}
                onBusDeleteClick={onBusDeleteClick}
                onBusEditClick={onBusEditClick}
            />
            <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
            <Notification notify={notify} setNotify={setNotify} />
        </Stack>

    )
}