
import { Button, Divider, Grid, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { InputField } from '../../../custom-fields';




export default function RegisterForm() {
   

    const methods = useForm<any>({
    });

    return (
        <FormProvider {...methods}>
            <form>
                <Grid container direction="column">
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
