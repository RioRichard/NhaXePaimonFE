import * as React from 'react';
import { SelectSearchField } from '../../../custom-fields/SelectSearchField';
import { FormProvider, useForm } from 'react-hook-form';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Typography, Checkbox, Container, Stack, Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function HistoryPaymentForm() {
    const methods = useForm<any>({
    });
    return (
        <Container maxWidth="lg" style={{marginTop:"40px"}}>
            <TableContainer sx={{ maxHeight: 600 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                    <TableHead>
                        <TableRow sx={{ height: "20px"}}>
                            <TableCell colSpan={10} sx={{textAlign:"center", fontSize:"25px"}}>{"Lịch sử giao dịch"}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Chuyến xe đi</TableCell>
                            <TableCell>Ngày khởi hành</TableCell>
                            <TableCell>Chuyến xe về</TableCell>
                            <TableCell>Ngày đặt</TableCell>
                            <TableCell>Số vé</TableCell>
                            <TableCell>Số ghế</TableCell>
                            <TableCell>Tổng tiền</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell colSpan={9} align="center" sx={{ p: 4 }}>
                                <Typography variant="h6" color="secondary" sx={{ mt: 1 }}>
                                    Không tìm thấy thông tin
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}