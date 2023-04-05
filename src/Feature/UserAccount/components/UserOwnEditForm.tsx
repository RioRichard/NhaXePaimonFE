
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import SaveIcon from '@mui/icons-material/Save';
import { Box, Button, Grid, Typography } from '@mui/material';
import { InputField } from '../../../custom-fields';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UserFormProps } from '../../User/types';
import { User } from '../../User/types';

export default function UserOwnEditForm(props: UserFormProps) {
    const { onSubmit, initialValues } = props;
    const navigate = useNavigate();

    const methods = useForm<User>({
        defaultValues: initialValues,
    });

    const {
        handleSubmit,
    } = methods;


    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <Grid container spacing={1}>
                    <Grid item xs={2} ></Grid>
                    <Grid item xs={8} >
                        <Typography variant="h1">Sửa đổi thông tin tài khoản</Typography>
                        <br />
                        <InputField name="name" label="Họ tên *" />
                        <InputField name="email" label="Địa chỉ *" />
                        <InputField name="phone" label="Số điện thoại *" />
                    </Grid>
                    <Grid item xs={2} ></Grid>
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
