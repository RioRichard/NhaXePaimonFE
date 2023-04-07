
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import SaveIcon from '@mui/icons-material/Save';
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import { InputField, SelectSearchField } from '../../../custom-fields';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { RouteFormProps, Routes } from '../types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { SelectBusNumberField } from '../../../custom-fields/SelectBusNumberField';
import { SelectoptionValue } from '../../../custom-fields/SelectOptionValue';
import moment from 'moment';
const validationSchema = Yup.object().shape({
    // name: Yup.string().required('Vui lòng nhập tên cơ sở'),
    // address: Yup.string().required('Vui lòng nhập địa chỉ cơ sở')
});
export default function RouteForm(props: RouteFormProps) {
    const { onSubmit, initialValues, listBase, listBus, isEditMode } = props;
    const navigate = useNavigate();
    const methods = useForm<Routes>({
        defaultValues: initialValues,
        resolver: yupResolver(validationSchema)
    });
    const {
        handleSubmit,
        formState: { isSubmitting }
    } = methods;
    //departure time
    const options = [];
    for (let i = 0; i < 5; i++) {
        const date = moment().add(i, "days");
        if (date.isValid()) {
            options.push({
                value: date.toDate(),
                name: date.format("DD-MM-YYYY"),
            });
        }
    }
    console.log(initialValues)
    return (
        <FormProvider {...methods} >
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" >
                <Grid container spacing={8} >
                    <Grid item xs={12} >
                        {isEditMode == true && <Typography variant="h2">Sửa thông tin tuyến</Typography>}
                        {isEditMode == false && <Typography variant="h2">Thêm tuyến</Typography>}
                        <br />
                        <SelectSearchField name="from_Id" label="Chọn điểm đi *" options={listBase} />
                        <SelectSearchField name="to_Id" label="Chọn điểm đến *" options={listBase} />
                        <SelectoptionValue name="departure" label="Thời gian khởi hành *" options={options} />
                        <SelectoptionValue name="arrival" label="Thời gian đến *" options={options} />
                        <SelectBusNumberField name="bus_id" label="Xe *" options={listBus} />
                        <InputField name="price" label="Giá *" />
                    </Grid>
                </Grid>
                <Box sx={{ mt: 4, textAlign: 'end' }}>
                    <Button variant="contained" color="success" startIcon={<SaveIcon />} type="submit">
                        Lưu&nbsp;
                        {isSubmitting && <CircularProgress color="inherit" size={20} />}
                    </Button>
                    <Button variant="contained" color="secondary" startIcon={<DoDisturbIcon />} sx={{ ml: 1 }} onClick={() => navigate(-1)}>
                        Quay lại
                    </Button>

                </Box>
            </form>
        </FormProvider>
    );
}
