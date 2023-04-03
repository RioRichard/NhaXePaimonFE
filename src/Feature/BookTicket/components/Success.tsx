import { Button, Link } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Success() {
    return (
        <>
            <h1>Đặt vé thành công</h1>
            <Button variant="contained" color="primary" startIcon={<ArrowBackIcon />} sx={{ ml: 1 }}>
                <Link href="/" color="inherit">
                    Quay lại</Link>
            </Button>
        </>
    );
}

