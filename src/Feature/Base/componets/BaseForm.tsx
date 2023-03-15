
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import SaveIcon from '@mui/icons-material/Save';
import { Box, Button, Grid, Typography } from '@mui/material';
import { CheckboxField, InputField, SelectSearchField } from '../../../custom-fields';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


export default function BaseForm() {
    const navigate = useNavigate();
    const methods = useForm<any>({
    });

    return (
        <FormProvider {...methods} >
            <form autoComplete="off" >
                <Grid container spacing={8} >
                    <Grid item xs={12} >
                        <Typography variant="h2">Thông tin khuyến mãi</Typography>
                        <br />
                        <InputField name="name" label="Tên cơ sở *" />
                        <InputField name="address" label="Địa chỉ cơ sở *" />
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
