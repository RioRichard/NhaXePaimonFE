
import { Button,Typography, Grid, Divider} from '@mui/material';
import { InputField } from '../../../custom-fields';
import { PasswordField } from '../../../custom-fields/PasswordField';
import { FormProvider, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function LoginForm() {
    const methods = useForm<any>({
    });

    return (
        <FormProvider {...methods}>
            <form autoComplete="off">
                <Grid container direction="column">
                    <Grid item>
                        <InputField name="username" label="Username" />
                    </Grid>
                    <Grid item>
                        <PasswordField name="password" label="Mật khẩu" />
                    </Grid>
                    <Grid item textAlign="end">
                        <Link to="/forgot-password">
                            <Typography fontWeight={550}>Quên mật khẩu?</Typography>
                        </Link>
                    </Grid>
                    <br />
                    <Grid item>
                        <Button fullWidth variant="contained" color="primary" type="submit" size="large">
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
