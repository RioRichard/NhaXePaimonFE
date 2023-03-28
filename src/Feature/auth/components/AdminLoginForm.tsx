
import { Button, Typography, Grid } from '@mui/material';
import { InputField } from '../../../custom-fields';
import { PasswordField } from '../../../custom-fields/PasswordField';
import { FormProvider, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { LoginFormProps } from '../types';
import { selectIsLogging, LoginPayload } from '../authSlice';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppSelector } from '../../../app/hooks';

export default function AdminLoginForm(props: LoginFormProps) {
    const { onSubmit } = props;
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Vui lòng nhập tên người dùng của bạn.'),
        pass: Yup.string().required('Vui lòng nhập mật khẩu của bạn.')
    });


    const methods = useForm<LoginPayload>({
        resolver: yupResolver(validationSchema)
    });

    const { handleSubmit } = methods;

    const isLogging = useAppSelector(selectIsLogging);

    return (
        <FormProvider {...methods}>
            <form  onSubmit={handleSubmit(onSubmit)} autoComplete="off">
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
                        <Button fullWidth variant="contained" color="primary" type="submit" size="large">
                            Đăng nhập
                        </Button>
                    </Grid>
                    <br />
                </Grid>
            </form>
        </FormProvider>
    );
}

