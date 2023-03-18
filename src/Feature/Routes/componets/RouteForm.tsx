
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import SaveIcon from '@mui/icons-material/Save';
import { Box, Button, Grid, Typography } from '@mui/material';
import { CheckboxField, InputField, SelectSearchField } from '../../../custom-fields';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


export default function RouteForm() {
    const navigate = useNavigate();
    const methods = useForm<any>({
    });

    return (
        <FormProvider {...methods} >
            <form autoComplete="off" >
                <Grid container spacing={8} >
                    <Grid item xs={12} >
                        <Typography variant="h2">Thêm tuyến</Typography>
                        <br />
                        <InputField name="routeId" label="Mã Tuyến *" />
                        <InputField name="from" label="Nơi đi *" />
                        <InputField name="to" label="Nơi đến *" />
                        <InputField name="departure" label="Thời gian khởi hành *" />
                        <InputField name="arrival" label="Thời gian đến *" />
                        <InputField name="bus" label="Xe *" />
                        <InputField name="driver" label="Tài xế *" />
                        <InputField name="staff" label="Phu xe *" />
                        <InputField name="price" label="Giá *" />
                        <InputField name="status" label="Trạng Thái *" />
                    </Grid>
                </Grid>
                <Box sx={{ mt: 4, textAlign: 'end' }}>
                    <Button variant="contained" color="success" startIcon={<SaveIcon />} type="submit">
                        Lưu
                    </Button>
                    <Button variant="contained" color="secondary" startIcon={<DoDisturbIcon />} sx={{ ml: 1 }} onClick={() => navigate(-1)}>
                        Quay lại
                    </Button>
                </Box>
            </form>
        </FormProvider>
    );
}
