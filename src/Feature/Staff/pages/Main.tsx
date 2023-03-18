import * as React from 'react';
import BaseList from '../componets/StaffList';
import Stack from '@mui/material/Stack';
import BaseAction from '../componets/StaffAction';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useQueryParams } from '../../Hooks';
import { ConfirmDialogProps, IParams, MessageProps } from '../../../model';
import { Staff } from '../types';
import { staffActions, selectStaffError, selectStaffList, selectStaffStatus, selectStaffsuccess } from '../StaffSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import basesApi from '../../../api/baseApi';
import { Notification,ConfirmDialog } from '../../../components/Common';
import staffApi from '../../../api/staffApi';

export default function Main() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [staff, setStaff] = React.useState<Staff[]>([]);
    const { queryParams, updateParams } = useQueryParams<IParams>();

    // connect store
    const listStaff: any = useAppSelector(selectStaffList);
    const error = useAppSelector(selectStaffError);
    const success = useAppSelector(selectStaffError);
    const status = useAppSelector(selectStaffError);
    // dispatch fetch list
    const [notify, setNotify] = React.useState<MessageProps>({
        isOpen: false,
        message: '',
        type: 'success'
    });
    React.useEffect(() => {
        dispatch(staffActions.fetchStaff(queryParams));
    }, [queryParams]);
    React.useEffect(() => {
        setStaff(
            listStaff?.staffs?.map((item: any) => {
                return {
                    ...item,
                };
            })
        );
    }, [listStaff?.staffs]);

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
    const onStaffEditClick = (staff: Staff) => {
        navigate(`${location.pathname}/${staff.id}`);
    };
    const onStaffDeleteClick = (staff: Staff) => {
        setConfirmDialog({
            isOpen: true,
            title: `Xóa nhân viên này ${staff.name}`,
            subTitle: `Bạn có chắc chắn muốn xóa nhân viên ${staff.name}? <br/> Bạn không thể hoàn tác thao tác này!!!`,
            onConfirm: async () => {
                setConfirmDialog({
                    ...confirmDialog,
                    isOpen: false
                });

                try {
                    const response = await staffApi.deleteStaff(staff);
                    setNotify({
                        isOpen: true,
                        message: response.message as string,
                        type: 'success'
                    });

                    // Trigger to re-fetch asset group list with current option
                    dispatch(staffActions.fetchStaff(queryParams));
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
            <BaseAction count={staff?.length}/>
            <BaseList
                rows={listStaff?.staffs}
                onStaffDeleteClick={onStaffDeleteClick}
                onStaffEditClick={onStaffEditClick}
            />
            <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
            <Notification notify={notify} setNotify={setNotify} />
        </Stack>

    )
}