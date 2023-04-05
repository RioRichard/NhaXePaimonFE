import { IconButton, Stack, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ReactComponent as EmptySvg } from '../../../assets/images/grid-empty.svg';
import { Routes, RoutesListProps } from '../types';
import 'tippy.js/dist/tippy.css'
import Tippy from '@tippyjs/react';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';

//Giao diện trang chủ hiển thị tất cả Account mà Admin quản lý
export default function RouteList(props: RoutesListProps) {
    const { rows, onRoutesDeleteClick, onRoutesEditClick } = props;

    const handleEditClick = (row: Routes) => {
        if (onRoutesEditClick) onRoutesEditClick?.(row);
    };
    const handleDeleteClick = (row: Routes) => {
        if (onRoutesDeleteClick) onRoutesDeleteClick?.(row);
    };
    return (
        <TableContainer component={Paper} sx={{ maxHeight: 600, marginTop: "20px" }}>
            <Table sx={{ minWidth: 700 }} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Mã Tuyến</TableCell>
                        <TableCell>Nơi đi</TableCell>
                        <TableCell>Nơi đến</TableCell>
                        <TableCell>Thời gian khởi hành</TableCell>
                        <TableCell>Thời gian đến</TableCell>
                        <TableCell>Xe</TableCell>
                        <TableCell>Giá</TableCell>
                        <TableCell align="center">Tác vụ</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows?.map((row, index) => {
                        return (
                            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>{index + 1 }</TableCell>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row?.from?.name}</TableCell>
                                <TableCell>{row?.to?.name}</TableCell>
                                <TableCell>{moment(row.departure).format('DD/MM/YYYY')}</TableCell>
                                <TableCell>{moment(row.arrival).format('DD/MM/YYYY')}</TableCell>
                                <TableCell>{row?.bus?.bus_number}</TableCell>
                                <TableCell>{row?.price}</TableCell>
                                <TableCell align="center">
                                    <Stack direction="row" spacing={2} justifyContent="center">
                                        <Tippy content="Chỉnh sửa tuyến đi">
                                            <IconButton onClick={() => handleEditClick(row)}>
                                                <CreateIcon />
                                            </IconButton>
                                        </Tippy>
                                        <Tippy content="Xóa tuyến đi">
                                            <IconButton onClick={() => handleDeleteClick(row)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </Tippy>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        );
                    })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}


