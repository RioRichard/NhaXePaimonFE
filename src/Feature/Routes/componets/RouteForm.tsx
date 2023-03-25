
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import SaveIcon from '@mui/icons-material/Save';
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import { CheckboxField, InputField, SelectSearchField } from '../../../custom-fields';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { RouteFormProps, Routes } from '../types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    // name: Yup.string().required('Vui lòng nhập tên cơ sở'),
    // address: Yup.string().required('Vui lòng nhập địa chỉ cơ sở')
});
export default function RouteForm(props:RouteFormProps) {
    const { onSubmit, initialValues } = props;
    const navigate = useNavigate();

    const methods = useForm<Routes>({
        defaultValues: initialValues,
        resolver: yupResolver(validationSchema)
    });
    
    const {
        handleSubmit,
        formState: { isSubmitting }
    } = methods;
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
                        Lưu&nbsp;
                        {isSubmitting && <CircularProgress color="inherit" size={20} />}
                    </Button>
                    <Button variant="contained" color="secondary" startIcon={<DoDisturbIcon />} sx={{ ml: 1 }} onClick={() => navigate(-1)}>
                        Quay lại
                    </Button>
                </Box>
            </form>
        </FormProvider>
    );
}
