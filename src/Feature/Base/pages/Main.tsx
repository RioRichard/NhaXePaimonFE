import * as React from 'react';
import BaseList from '../componets/BaseList';
import Stack from '@mui/material/Stack';
import BaseAction from '../componets/BaseAction';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useQueryParams } from '../../Hooks';
import { ConfirmDialogProps, IParams, MessageProps } from '../../../model';
import { Base } from '../types';
import { baseActions, selectBasesError, selectBasesList, selectBasesStatus, selectBasessuccess } from '../BaseSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import basesApi from '../../../api/baseApi';
import { Notification,ConfirmDialog } from '../../../components/Common';

export default function Main() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [bases, setBases] = React.useState<Base[]>([]);
    const { queryParams, updateParams } = useQueryParams<IParams>();
    const [basesChecked, setBasesChecked] = React.useState<Base[]>([]);

    // connect store
    const listBases: any = useAppSelector(selectBasesList);
    const error = useAppSelector(selectBasesError);
    const success = useAppSelector(selectBasessuccess);
    const status = useAppSelector(selectBasesStatus);
    // dispatch fetch list
    const [notify, setNotify] = React.useState<MessageProps>({
        isOpen: false,
        message: '',
        type: 'success'
    });
    React.useEffect(() => {
        dispatch(baseActions.fetchBases(queryParams));
    }, [queryParams]);
    React.useEffect(() => {
        setBases(
            listBases?.bases?.map((item: any) => {
                return {
                    ...item,
                };
            })
        );
    }, [listBases?.bases]);

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
    const onBaseEditClick = (base: Base) => {
        navigate(`${location.pathname}/${base.id}`);
    };
    const onBaseDeleteClick = (base: Base) => {
        console.log("del");
        
        setConfirmDialog({
            isOpen: true,
            title: `Xóa cơ sở này ${base.name}`,
            subTitle: `Bạn có chắc chắn muốn xóa cơ sở ${base.name}? <br/> Bạn không thể hoàn tác thao tác này!!!`,
            onConfirm: async () => {
                setConfirmDialog({
                    ...confirmDialog,
                    isOpen: false
                });

                try {
                    const response = await basesApi.deleteBase(base);
                    setNotify({
                        isOpen: true,
                        message: response.message as string,
                        type: 'success'
                    });

                    // Trigger to re-fetch asset group list with current option
                    dispatch(baseActions.fetchBases(queryParams));
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
    const handleCheckboxAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let checked = e.target.checked;
        setBases(
            bases.map((d) => {
                d.select = checked;
                return d;
            })
        );
        const basesChecked = bases.filter((x) => x.select === true);
        setBasesChecked(basesChecked);
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let checked = e.target.checked;
        let value = e.target.value;
        setBases(
            bases.map((sd) => {
                if (sd.id === value) {
                    sd.select = checked;
                }
                return sd;
            })
        );
        const basesChecked = bases.filter((x) => x.select === true);
        setBasesChecked(basesChecked);
    };
    console.log(bases?.length);
    
    return (
        <Stack >
            <BaseAction count={bases?.length}/>
            <BaseList
                rows={listBases?.bases}
                onBaseDeleteClick={onBaseDeleteClick}
                onBaseEditClick={onBaseEditClick}
                onCheckboxAllChange={handleCheckboxAllChange}
                onCheckboxChange={handleCheckboxChange}
            />
            <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
            <Notification notify={notify} setNotify={setNotify} />
        </Stack>

    )
}