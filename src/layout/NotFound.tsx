import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function NotFound() {
    const navigate = useNavigate();

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            height: '100%',
        }}>
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
            </Box>
        </Box>
    );
}
