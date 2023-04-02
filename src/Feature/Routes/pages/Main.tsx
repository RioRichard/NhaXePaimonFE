import * as React from 'react';
import RouteList from '../componets/RouteList';
import Stack from '@mui/material/Stack';
import RouteAction from '../componets/RouteAction';
import routeApi from '../../../api/routeApi';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { Routes } from '../types';
import { useQueryParams } from '../../Hooks';
import { ConfirmDialogProps, IParams, MessageProps } from '../../../model';
import { routesActions, selectRoutesList, selectRoutesStatus, selectRoutessuccess } from '../RoutesSlice';
import { selectBasesError } from '../../Base/BaseSlice';
import { Notification, ConfirmDialog } from '../../../components/Common';
export default function Main() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [routes, setRoutes] = React.useState<Routes[]>([]);
    const { queryParams } = useQueryParams<IParams>();

    // connect store
    const listRoutes: any = useAppSelector(selectRoutesList);
    const error = useAppSelector(selectBasesError);
    const success = useAppSelector(selectRoutessuccess);
    const status = useAppSelector(selectRoutesStatus);
    // dispatch fetch list
    const [notify, setNotify] = React.useState<MessageProps>({
        isOpen: false,
        message: '',
        type: 'success'
    });

    React.useEffect(() => {
        dispatch(routesActions.fetchRoutes(queryParams));
    }, [queryParams]);
    React.useEffect(() => {
        setRoutes(
            listRoutes?.routes?.map((item: any) => {
                return {
                    ...item,
                };
            })
        );
    }, [listRoutes?.routes]);

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
    const onRoutesEditClick = (routes: Routes) => {
        navigate(`${location.pathname}/${routes.id}`);
    };
    const onRoutesDeleteClick = (routes: Routes) => {
        setConfirmDialog({
            isOpen: true,
            title: `Xóa tuyến "${routes.id} "? `,
            subTitle: `Bạn không thể hoàn tác thao tác này!!!`,
            onConfirm: async () => {
                setConfirmDialog({
                    ...confirmDialog,
                    isOpen: false
                });

                try {
                    const response = await routeApi.deleteRoutes(routes);
                    setNotify({
                        isOpen: true,
                        message: response.message as string,
                        type: 'success'
                    });

                    // Trigger to re-fetch asset group list with current option
                    dispatch(routesActions.fetchRoutes(queryParams));
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
            <RouteAction count={routes?.length} />
            <RouteList
                rows={listRoutes?.routes}
                onRoutesDeleteClick={onRoutesDeleteClick}
                onRoutesEditClick={onRoutesEditClick}
            />
            {/* Notification */}
            <Notification notify={notify} setNotify={setNotify} />
            {/* Dialog confirm before delete data */}
            <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
        </Stack>

    )
}