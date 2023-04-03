
import { Button, Typography, Grid, Divider } from '@mui/material';
import { InputField } from '../../../custom-fields';
import { PasswordField } from '../../../custom-fields/PasswordField';
import { FormProvider, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { LoginFormProps } from '../types';
import { selectIsLogging, LoginPayload } from '../authSlice';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppSelector } from '../../../app/hooks';
import storage from '../../../utils/storage';

export default function LoginForm(props: LoginFormProps) {
    const { onSubmit } = props;
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Vui lòng nhập tên người dùng của bạn.'),
        pass: Yup.string().required('Vui lòng nhập mật khẩu của bạn.')
    });


    const methods = useForm<LoginPayload>({
        resolver: yupResolver(validationSchema)
    });

    const { handleSubmit } = methods;

    const handleLogout = () => {
        storage.clearAdminToken();
    }
    const isLogging = useAppSelector(selectIsLogging);

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <Grid container direction="column">
                    <Grid item>
                        <InputField name="username" label="Username" />
                    </Grid>
                    <Grid item>
                        <PasswordField name="pass" label="Mật khẩu" />
                    </Grid>
                    <Grid item textAlign="end">
                        {/* <Link to="/forgot-password">
                            <Typography fontWeight={550}>Quên mật khẩu?</Typography>
                        </Link> */}
                    </Grid>
                    <br />
                    <Grid item> 
                        <Button onClick={handleLogout} fullWidth variant="contained" color="primary" type="submit" size="large">
                            Đăng nhập
                        </Button>
                    </Grid>
                    <br />
                    <Divider>
                        <Grid item>
                            <Typography component="span">Bạn không có tài khoản?</Typography>
                            <Link to="/register">
                                <Typography fontWeight={550} component="span" sx={{ ml: 1 }}>
                                    Đăng ký
                                </Typography>
                            </Link>
                        </Grid>
                    </Divider>
                </Grid>
            </form>
        </FormProvider>
    );
}

