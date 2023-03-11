import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    notfound: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: '100%',

        '& h1': {
            fontSize: '40px'
        },

        '& h1:first-child': {
            fontSize: '140px',
            fontWeight: '800'
        }
    }
}));

export function NotFound() {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <Box className={classes.notfound}>
            <Box>
                <Typography variant="h1">404</Typography>
                <br />
                <Typography variant="h1">Không tìm thấy nội dung 😓</Typography>
                <br />
                <Typography variant="h6">URL của nội dung này đã bị thay đổi hoặc không còn tồn tại.</Typography>
                <br />
                <br />
                <Button variant="contained" color="error" onClick={() => navigate(-1)}>
                    Quay lại
                </Button>
                {/* <Link to="/admin/trang-chu">
                </Link> */}
            </Box>
        </Box>
    );
}
