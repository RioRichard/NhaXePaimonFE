
import { IconButton, Stack, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tippy from '@tippyjs/react';
import { ReactComponent as EmptySvg } from '../../../assets/images/grid-empty.svg';
import { Order, OrderListProps } from '../types';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';

//Giao diện trang chủ hiển thị tất cả Account mà Admin quản lý
export default function OrderList(props: OrderListProps) {
    const { rows,onOrderEditClick } = props
    const handleEditClick = (row: Order) => {
        if (onOrderEditClick) onOrderEditClick?.(row);
    };
    return (
        <TableContainer component={Paper} sx={{ maxHeight: 600, marginTop: "20px" }}>
            <Table sx={{ minWidth: 700 }} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Mã đơn đặt vé</TableCell>
                        <TableCell>Nơi đi</TableCell>
                        <TableCell>Nơi đến</TableCell>
                        <TableCell>Trạng thái</TableCell>
                        <TableCell>Thông tin thanh toán</TableCell>
                        <TableCell align="center">Tác vụ</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows?.map((row, index) => (
                        <TableRow key={row?.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>{index + 1 /* + pageSize * (currentPage - 1) */}</TableCell>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.route?.from?.name}</TableCell>
                            <TableCell>{row.route?.to?.name}</TableCell>
                            <TableCell>{row.status}</TableCell>
                            <TableCell>{row.paymentInfo}</TableCell>
                            <TableCell align="center">
                                <Stack direction="row" spacing={2} justifyContent="center">
                                    <Tippy content="Chỉnh sửa đơn đặt vé">
                                        <IconButton onClick={() => handleEditClick(row)}>
                                            <CreateIcon />
                                        </IconButton>
                                    </Tippy>
                                </Stack>
                            </TableCell>
                        </TableRow>
                    ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}


