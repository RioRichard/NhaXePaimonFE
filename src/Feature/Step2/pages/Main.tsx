import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { InputField } from '../../../custom-fields/InputField';
import { FormProvider, useForm } from 'react-hook-form';
import { CheckboxField } from '../../../custom-fields/CheckboxField';
import Stack from '@mui/material/Stack';
import { Button, Box } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BackspaceIcon from '@mui/icons-material/Backspace';

export default function Main() {
    const methods = useForm<any>({
        // defaultValues: initialValues,
        // resolver: yupResolver(validationSchema)
    });
    return (
        <FormProvider {...methods}>
            <Container maxWidth="lg">
                <Box sx={{ bgcolor: '', height: '100vh' }} >
                    <Container maxWidth="lg">
                        <h2 style={{ borderBottom: "#C1C1C1 1px solid", lineHeight: "60px" }} >THÔNG TIN KHÁCH HÀNG</h2>
                        <Box sx={{ width: '100%' }}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item md={3}>
                                    <InputField name="name" label="Họ tên *" />
                                    <InputField name="name" label="Họ tên *" />
                                    <InputField name="name" label="Họ tên *" />
                                </Grid>
                                <Grid item md={3}>
                                    <InputField name="dateOfBirth" label="Năm sinh *" />
                                </Grid>
                                <Grid item md={3}>
                                    <InputField name="sdt" label="Số điện thoại *" />
                                </Grid>
                                <Grid item md={3}>
                                    <InputField name="email" label="Email *" />
                                </Grid>
                            </Grid>
                            <Stack direction="row-reverse" spacing={2}>
                                <Button variant="contained" color="secondary" startIcon={<BackspaceIcon />} sx={{ ml: 1 }}>
                                    Trở về
                                </Button>
                                <Button variant="contained" color="secondary" startIcon={<ClearIcon />} sx={{ ml: 1 }}>
                                    Xóa thông tin
                                </Button>
                                <Button variant="contained" color="primary" startIcon={<ArrowForwardIcon />} sx={{ ml: 1 }}>
                                    Tiếp tục
                                </Button>
                                <CheckboxField /*value={true} */ name="acept" label="Chấp nhận điều khoản" />
                            </Stack>

                        </Box>
                    </Container>
                </Box>
            </Container>
        </FormProvider>
    )
}

