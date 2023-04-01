import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { FormProvider, useForm } from 'react-hook-form';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Button, Box, FormControlLabel, Radio, Checkbox } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { SelectSearchField } from '../../../custom-fields/SelectSearchField';
import { RadioField, InputField } from '../../../custom-fields';
import { Link } from 'react-router-dom';
import { getFinalData } from '../BookTicketSlice';
import { useAppSelector } from '../../../app/hooks';



export default function Step3() {
    const methods = useForm<any>({
        // defaultValues: initialValues,
        // resolver: yupResolver(validationSchema)
    });
    const finalData: any = useAppSelector(getFinalData);
    const status = [
        { id: 'GiN', name: 'Giường nằm' },
        { id: 'GhN', name: 'Ghế nằm' },
    ];
    const [alignment, setAlignment] = React.useState('web');
    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };
    function handle() {
        if (selected == true) {
            setSelected(false)
        }
        else {
            setSelected(true)
        }
    }
    const [selected, setSelected] = React.useState(false);

    return (
        <FormProvider {...methods}>
            <Container maxWidth="lg">
                <Box sx={{ bgcolor: '', height: '100vh' }} >
                    <Container maxWidth="lg">
                        <h2 style={{ borderBottom: "#C1C1C1 1px solid", lineHeight: "60px" }} >Chọn Ghế</h2>
                        <Box sx={{ width: '100%' }}>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item md={4}>
                                    <Typography align='left' fontSize={'16px'} fontWeight={'bold'}>Từ ... đến ...</Typography>
                                    <SelectSearchField name="seatType" label="Chọn loại ghế *" options={status} />
                                    <SelectSearchField name="xiexie" label="Chọn chuyến xe *" options={status} />
                                    <Typography align='left' fontSize={'16px'}>Nơi lên xe</Typography>
                                    <RadioField name="inplace" label="">
                                        <FormControlLabel value="1" control={<Radio />} label="Bến" />
                                        <FormControlLabel value="2" control={<Radio />} label="Trạm" />
                                    </RadioField>
                                    <Typography align='left' fontSize={'16px'}>Nơi xuống xe</Typography>
                                    <RadioField name="outplace" label="">
                                        <FormControlLabel value="1" control={<Radio />} label="Bến" />
                                        <FormControlLabel value="2" control={<Radio />} label="Trạm" />
                                    </RadioField>
                                    <Typography align='left' fontSize={'16px'}>Yêu cầu bổ sung</Typography>
                                    <InputField name="description" label="" multiline rows={3} />
                                </Grid>

                                <Grid item md={4} container columnSpacing={1}>
                                    <Grid md={1}></Grid>
                                    <Grid md={3}>
                                        <Stack direction='column' spacing={1}>
                                            <Checkbox disabled icon={<Button disabled variant="outlined">A1</Button>} checkedIcon={<Button variant="contained">A1</Button>} />
                                            <Checkbox icon={<Button variant="outlined">A1</Button>} checkedIcon={<Button variant="contained">A1</Button>} />
                                            <Checkbox icon={<Button variant="outlined">A1</Button>} checkedIcon={<Button variant="contained">A1</Button>} />
                                        </Stack>
                                    </Grid>
                                    <Grid md={1}></Grid>
                                    <Grid md={3}>
                                        <Stack direction='column' spacing={1}>
                                            <Checkbox icon={<Button variant="outlined">A1</Button>} checkedIcon={<Button variant="contained">A1</Button>} />
                                            <Checkbox icon={<Button variant="outlined">A1</Button>} checkedIcon={<Button variant="contained">A1</Button>} />
                                            <Checkbox icon={<Button variant="outlined">A1</Button>} checkedIcon={<Button variant="contained">A1</Button>} />
                                        </Stack>
                                    </Grid>
                                    <Grid md={1}></Grid>
                                    <Stack direction='column' spacing={1}>
                                        <Checkbox icon={<Button variant="outlined">A1</Button>} checkedIcon={<Button variant="contained">A1</Button>} />
                                        <Checkbox icon={<Button variant="outlined">A1</Button>} checkedIcon={<Button variant="contained">A1</Button>} />
                                        <Checkbox icon={<Button variant="outlined">A1</Button>} checkedIcon={<Button variant="contained">A1</Button>} />
                                    </Stack>
                                </Grid>
                                <Grid item md={4}>
                                    <Stack direction={'column'} spacing={2} sx={{ backgroundColor: '#f5f5f5', alignItems: 'center' }}>
                                        <h2 style={{ borderBottom: "#C1C1C1 1px solid", lineHeight: "60px", width: '80%' }} >Chi tiết vé</h2>
                                        <Stack direction="row" spacing={3} sx={{ justifyContent: 'center' }}>
                                            <Typography align='right' fontSize={'16px'}>Họ và tên:</Typography>
                                            <Typography align='left' color={'red'} fontSize={'15px'}>Họ và tên</Typography>
                                        </Stack>
                                        <Stack direction="row" spacing={3}>
                                            <Typography align='right' fontSize={'16px'}>Điện thoại:</Typography>
                                            <Typography align='left' color={'red'} fontSize={'15px'}>0327387506</Typography>
                                        </Stack>
                                        <Stack direction="row" spacing={3}>
                                            <Typography align='left' fontSize={'16px'}>Họ và tên:</Typography>
                                            <Typography align='left' color={'red'} fontSize={'15px'}>Họ và tên</Typography>
                                        </Stack>
                                        <Stack direction="row" spacing={3}>
                                            <Typography align='left' fontSize={'16px'}>Họ và tên:    </Typography>
                                            <Typography align='left' color={'red'} fontSize={'15px'}>Họ và tên</Typography>
                                        </Stack>
                                        <Stack direction="row" spacing={3}>
                                            <Typography align='left' fontSize={'16px'}>Họ và tên:    </Typography>
                                            <Typography align='left' color={'red'} fontSize={'15px'}>Họ và tên</Typography>
                                        </Stack>
                                        <Stack direction="row" spacing={3}>
                                            <Typography align='left' fontSize={'16px'}>Họ và tên:    </Typography>
                                            <Typography align='left' color={'red'} fontSize={'15px'}>Họ và tên</Typography>
                                        </Stack>
                                    </Stack>
                                </Grid>
                            </Grid>
                            <Stack direction="row-reverse" spacing={2}>
                                <Link to="/thanh-toan" style={{ textDecoration: 'none' }} >
                                    <Button variant="contained" color="primary" startIcon={<ArrowForwardIcon />} sx={{ ml: 1 }}>
                                        Hoàn tất chọn vé
                                    </Button>
                                </Link>
                                <Link to="/" style={{ textDecoration: 'none' }} >
                                    <Button variant="contained" color="secondary" startIcon={<BackspaceIcon />} sx={{ ml: 1 }}>
                                        Trở về
                                    </Button>
                                </Link>

                            </Stack>

                        </Box>
                    </Container>
                </Box>
            </Container>
        </FormProvider>
    )
}

