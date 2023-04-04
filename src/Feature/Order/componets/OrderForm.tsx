
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import SaveIcon from '@mui/icons-material/Save';
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import { CheckboxField, InputField, SelectSearchField } from '../../../custom-fields';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Order, OrderFormProps } from '../types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    // name: Yup.string().required('Vui lòng nhập tên cơ sở'),
    // address: Yup.string().required('Vui lòng nhập địa chỉ cơ sở')
});
export default function OrderForm(props: OrderFormProps) {
    const { onSubmit, initialValues } = props;
    const navigate = useNavigate();

    const methods = useForm<Order>({
        defaultValues: initialValues,
        resolver: yupResolver(validationSchema)
    });

    const {
        handleSubmit,
        formState: { isSubmitting }
    } = methods;
    
    return (
        <FormProvider {...methods} >
            <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={8} >
                    <Grid item xs={12} >
                        <Typography variant="h2">Thông tin đơn đặt vé</Typography>
                        <br />
                        <InputField name="id" label="Mã đơn *" disabled />
                        <InputField name="route?.from?.name" label="Nơi đi *" disabled />
                        <InputField name="route?.to?.name" label="Nơi đến *" disabled />
                        <InputField name="status" label="Tình trạng *" />
                        <InputField name="paymentInfo" label="Thông tin thanh toán *" />
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
