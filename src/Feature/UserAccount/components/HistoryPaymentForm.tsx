
import { useForm } from 'react-hook-form';

import { Typography, Container } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import moment from 'moment';
interface OrderListProps {
    rows: any[];
}
export default function HistoryPaymentForm(props: OrderListProps) {
    const { rows } = props

    return (
        <Container maxWidth="lg" style={{ marginTop: "40px" }}>
            <TableContainer sx={{ maxHeight: 600 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                    <TableHead>
                        <TableRow sx={{ height: "20px" }}>
                            <TableCell colSpan={10} sx={{ textAlign: "center", fontSize: "25px" }}>{"Lịch sử giao dịch"}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell align="center">Mã đơn</TableCell>
                            <TableCell align="center">Hình thức thanh toán</TableCell>
                            {/*  <TableCell align="center">Loại xe</TableCell>
                            <TableCell align="center">Thời gian khởi hành</TableCell>
                            <TableCell align="center">Thời gian đến</TableCell>
                            <TableCell align="center">Số ghế</TableCell> */}
                            <TableCell align="center">Tình trạng</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows?.length > 0 ? (
                            rows.map((row, index) => (
                                <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row"> {index + 1}</TableCell>
                                    <TableCell align="center">{row?.id}</TableCell>
                                    <TableCell align="center">{row?.paymentInfo}</TableCell>
                                    {/*   <TableCell align="center">{row?.route?.bus?.bus_number}</TableCell>
                                    <TableCell align="center">{moment(row?.route?.arrival).format('DD/MM/YYYY')}</TableCell>
                                    <TableCell align="center">{moment(row?.route?.departure).format('DD/MM/YYYY')}</TableCell>
                                    <TableCell align="center">{row?.route?.bus?.seats?.name}</TableCell> */}
                                    <TableCell align="center">{row?.status}</TableCell>
                                </TableRow>
                            ))
                        ) : (<TableRow>
                            <TableCell colSpan={9} align="center" sx={{ p: 4 }}>
                                <Typography variant="h6" color="secondary" sx={{ mt: 1 }}>
                                    Không tìm thấy thông tin
                                </Typography>
                            </TableCell>
                        </TableRow>)
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}