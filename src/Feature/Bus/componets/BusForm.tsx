
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import SaveIcon from '@mui/icons-material/Save';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import { CheckboxField, InputField, SelectSearchField } from '../../../custom-fields';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Bus, BusFormProps } from '../types';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    plate: Yup.string().required('Vui lòng nhập biển số'),
    type: Yup.string().required('Vui lòng nhập loại xe')
});

export default function BusForm(props: BusFormProps) {
    const { onSubmit, initialValues } = props;
    const navigate = useNavigate();

    const methods = useForm<Bus>({
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
                        <Typography variant="h2">Thêm xe</Typography>
                        <br />
                        <InputField name="bus_number" label="Biển số*" />
                        <InputField name="type" label="Loại xe *" />
                    </Grid>
                </Grid>
                <Box sx={{ mt: 4, textAlign: 'end' }}>
                    <Button variant="contained" color="success" startIcon={<SaveIcon />} type="submit">
                        Lưu&nbsp;
                        {isSubmitting && <CircularProgress color="inherit" size={20} />}
                    </Button>
                    <Button variant="contained" color="secondary" startIcon={<DoDisturbIcon />} sx={{ ml: 1 }} onClick={() => navigate(-1)}>
                        Bỏ qua
                    </Button>
                </Box>
            </form>
        </FormProvider>
    );
}

