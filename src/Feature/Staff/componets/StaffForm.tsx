
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import SaveIcon from '@mui/icons-material/Save';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import { InputField, SelectSearchField } from '../../../custom-fields';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Staff, StaffFormProps } from '../types';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Vui lòng nhập tên cơ sở'),
    address: Yup.string().required('Vui lòng nhập địa chỉ cơ sở')
});

export default function StaffForm(props: StaffFormProps) {
    const { onSubmit, initialValues } = props;
    const navigate = useNavigate();

    const methods = useForm<Staff>({
        defaultValues: initialValues,
        resolver: yupResolver(validationSchema)
    });
    console.log("default", initialValues);
    
    const {
        handleSubmit,
        formState: { isSubmitting }
    } = methods;
    return (
        <FormProvider {...methods} >
            <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={8} >
                    <Grid item xs={12} >
                        <Typography variant="h2">Thêm nhân viên</Typography>
                        <br />
                        <InputField name="name" label="Tên nhân viên *" />
                        <InputField name="address" label="Địa chỉ *" />
                        <InputField name="phone" label="Số điện thoại *" />
                        <InputField name="position" label="Vị trí*" />
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

