
import { Button, Divider, Grid, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { InputField } from '../../../custom-fields';
import { RegisterFormProps } from '../types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { User } from '../../User/types';

export default function RegisterForm(props: RegisterFormProps) {
    const { onSubmit } = props;
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Vui lòng nhập tên người dùng của bạn.'),
        password: Yup.string().required('Vui lòng nhập mật khẩu của bạn.'),
        email: Yup.string().email('Email không hợp lệ').required('Vui lòng nhập email.'),
        phone: Yup.string().required('Vui lòng nhập số điện thoại.'),
        name: Yup.string().required('Vui lòng nhập họ tên của bạn.'),
    });


    const methods = useForm<User>({
        resolver: yupResolver(validationSchema)
    });

    const { handleSubmit } = methods;

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <Grid container direction="column">
                    <Grid item>
                        <InputField name="username" label="Tên tài khoản" />
                    </Grid>
                    <Grid item>
                        <InputField name="name" label="Họ và tên" />
                    </Grid>
                    <Grid item>
                        <InputField name="email" label="Email" />
                    </Grid>
                    <Grid item>
                        <InputField name="phone" label="Số điện thoại" />
                    </Grid>
                    <Grid item>
                        <InputField name="password" label="Mật khẩu" type="password" />
                    </Grid>
                    <br />
                    <Grid item>
                        <Button fullWidth variant="contained" color="primary" type="submit" size="large">
                            Đăng ký
                        </Button>
                    </Grid>
                    <br />
                    <Divider>
                        <Grid item>
                            <Typography component="span">Bạn đã có tài khoản?</Typography>
                            <Link to="/login">
                                <Typography fontWeight={550} component="span" sx={{ ml: 1 }}>
                                    Đăng nhập
                                </Typography>
                            </Link>
                        </Grid>
                    </Divider>
                </Grid>
            </form>
        </FormProvider>
    );
}
