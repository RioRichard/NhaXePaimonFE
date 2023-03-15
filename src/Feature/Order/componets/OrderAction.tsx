import AddIcon from '@mui/icons-material/Add';
import { Button, Grid, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

//Các nút 
export default function OrderAction() {
    const location = useLocation();
    return (
        <Grid container alignItems="center" justifyContent="space-between" sx={{marginTop:"50px"}}>
            <Grid item xs={6} md={6}>
                <Typography>Tổng cộng có : dữ liệu</Typography>
            </Grid>
            <Grid item xs={6} md={6} textAlign="end">
                <Link to={`${location.pathname}/them-moi`} style={{textDecoration:"none"}}>
                    {/* <Button variant="contained" color="success" startIcon={<AddIcon />} sx={{ ml: 1 }}>
                        Thêm mới
                    </Button> */}
                </Link>
            </Grid>
        </Grid>
    );
}

