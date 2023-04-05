
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import SaveIcon from '@mui/icons-material/Save';
import { Box, Button, Grid, Typography } from '@mui/material';
import { InputField } from '../../../custom-fields';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ManagerFormProps } from '../types';
import { Manager } from '../types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Vui lòng nhập tên tài khoản'),
    email: Yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
    phone: Yup.string().required('Vui lòng nhập số điện thoại'),
    role: Yup.string().required('Vui lòng nhập vai trò'),
});

export default function ManagerForm(props: ManagerFormProps) {
    const { onSubmit, initialValues, isEditMode } = props;
    const navigate = useNavigate();

    const methods = useForm<Manager>({
        defaultValues: initialValues,
        resolver: yupResolver(validationSchema)
    });

    const {
        handleSubmit,
    } = methods;


    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <Grid container spacing={8}>
                    <Grid item xs={12} >
                        <Typography variant="h1">Thông tin manager</Typography>
                        <br />

                        {!isEditMode && <>
                            <InputField name="username" label="Username *" />
                            <InputField name="pass" label="Password *" />
                        </>
                        }
                        <InputField name="email" label="Email *" />
                        <InputField name="phone" label="Số điện thoại *" />
                        <InputField name="role" label="Vai trò *" />
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
