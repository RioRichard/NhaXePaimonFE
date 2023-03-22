
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import SaveIcon from '@mui/icons-material/Save';
import { Box, Button, Grid, Typography } from '@mui/material';
import { InputField } from '../../../custom-fields';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UserFormProps } from '../types';
import { User } from '../types';


export default function UserForm(props: UserFormProps) {

    const { onSubmit, initialValues, isEditMode } = props;
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
                <Grid container spacing={8}>
                    <Grid item xs={6} md={6}>
                        <Typography variant="h5">Thông tin đăng nhập</Typography>
                        <br />
                        <InputField name="username" label="Username *" />
                        {
                            !isEditMode && (
                                <InputField name="password" label="Mật khẩu *" />
                            )
                        }
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Typography variant="h5">Thông tin người dùng</Typography>
                        <br />
                        <InputField name="name" label="Tên người dùng *" />
                        <br />
                        <InputField name="email" label="Email *" />
                        <br />
                        <InputField name="phone" label="Số điện thoại *" />
                        <br />
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
