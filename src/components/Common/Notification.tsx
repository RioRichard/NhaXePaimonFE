import { Alert, Snackbar } from '@mui/material';
import { NotificationProps } from '../../model';
import React from 'react';

export function Notification(props: NotificationProps) {
    const { notify, setNotify } = props;

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setNotify({
            ...notify,
            isOpen: false
        });
    };

    return (
        <Snackbar open={notify.isOpen} autoHideDuration={3000} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} onClose={handleClose}>
            <Alert severity={notify.type} variant="filled" onClose={handleClose}>
                {notify.message}
            </Alert>
        </Snackbar>
    );
}
