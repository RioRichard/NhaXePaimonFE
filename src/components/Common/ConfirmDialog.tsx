import CloseIcon from '@mui/icons-material/Close';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import DoneIcon from '@mui/icons-material/Done';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, IconButton, Typography } from '@mui/material';
import React from 'react';
interface DialogData {
    isOpen: boolean;
    title: string;
    subTitle: string;
    onConfirm: () => void;
}

interface ConfirmDialogProps {
    confirmDialog: DialogData;
    setConfirmDialog: React.Dispatch<React.SetStateAction<DialogData>>;
}

export function ConfirmDialog(props: ConfirmDialogProps) {
    const { confirmDialog, setConfirmDialog } = props;

    const handleClose = () => {
        setConfirmDialog({ ...confirmDialog, isOpen: false });
    };

    return (
        <Dialog open={confirmDialog.isOpen} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <Box
                id="alert-dialog-title"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 24px'
                }}
            >
                <Typography variant="h1">{confirmDialog.title}</Typography>
                <IconButton onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <DialogContent>
                <DialogContentText dangerouslySetInnerHTML={{ __html: confirmDialog.subTitle }} />

                <DialogActions sx={{ mt: 4 }}>
                    <Button variant="contained" color="secondary" startIcon={<DoDisturbIcon />} onClick={handleClose}>
                        Bỏ qua
                    </Button>
                    <Button variant="contained" color="error" startIcon={<DoneIcon />} onClick={confirmDialog.onConfirm}>
                        Đồng ý
                    </Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    );
}
