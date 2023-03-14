
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import SaveIcon from '@mui/icons-material/Save';
import { Box, Button, Grid, Typography } from '@mui/material';
import { CheckboxField, InputField, SelectSearchField } from '../../../custom-fields';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';




export default function AccountForm() {
    const navigate = useNavigate();
    const methods = useForm<any>({
    });

    return (
        <FormProvider {...methods}>
            <form autoComplete="off">
                <Grid container spacing={8}>
                    <Grid item xs={6} md={6}>
                        <Typography variant="h5">Thông tin đăng nhập</Typography>
                        <br />
                        <InputField name="username" label="Username *" />
                        <InputField name="password" label="Mật khẩu *" />
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Typography variant="h5">Thông tin người dùng</Typography>
                        <br />
                        <InputField name="name" label="Tên người dùng *" />
                        <br />
                        <InputField name="email" label="Email *" />
                        <br />
                        <InputField name="phoneNumber" label="Số điện thoại *" />
                        <br />
                        <SelectSearchField name="position" label="Vai trò *" options={null} />
                        <Typography variant="h5">Trạng thái</Typography>
                        <br />
                        <CheckboxField name="isApprove" label="Cho phép hoạt động" />
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
