
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import SaveIcon from '@mui/icons-material/Save';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Checkbox, CircularProgress, Grid, Stack, Typography } from '@mui/material';
import { CheckboxField, InputField, SelectSearchField } from '../../../custom-fields';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Bus, BusFormProps } from '../types';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    bus_number: Yup.string().required('Vui lòng nhập biển số'),
    type: Yup.string().required('Vui lòng nhập loại xe'),
    numberSeat: Yup.number().required('Vui lòng số lượng ghế')
});

export default function BusForm(props: BusFormProps) {
    const { onSubmit, initialValues, isEditMode } = props;
    const navigate = useNavigate();

    const methods = useForm<Bus>({
        defaultValues: initialValues,
        resolver: yupResolver(validationSchema)
    });

    const {
        handleSubmit,
        formState: { isSubmitting }
    } = methods;



    return (
        <FormProvider {...methods} >
            <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={8} >
                    <Grid item xs={12} >
                        <Typography variant="h2">{isEditMode ? "Sửa xe" : "Thêm xe"}</Typography>
                        <br />
                        <InputField name="bus_number" label="Biển số*" />
                        <InputField name="type" label="Loại xe *" />

                        <Grid md={12} container columnSpacing={1}>
                            {initialValues?.seats.map((item, index) => {
                                return (
                                    <div>
                                        <Checkbox icon={<Button disabled={item.status} variant={item.status ? "contained" : "outlined"}>{item.name}</Button>} checkedIcon={<Button variant="contained">{item.name}</Button>} />
                                    </div>
                                )
                            })}
                        </Grid>
                        {isEditMode ? null : <InputField type='number' name="numberSeat" label="Số lượng ghế *" />}
                    </Grid>
                </Grid>
                <Box sx={{ mt: 4, textAlign: 'end' }}>
                    <Button variant="contained" color="success" startIcon={<SaveIcon />} type="submit">
                        Lưu&nbsp;
                        {isSubmitting && <CircularProgress color="inherit" size={20} />}
                    </Button>
                    <Button variant="contained" color="secondary" startIcon={<DoDisturbIcon />} sx={{ ml: 1 }} onClick={() => navigate(-1)}>
                        Bỏ qua
                    </Button>
                </Box>
            </form>
        </FormProvider>
    );
}

