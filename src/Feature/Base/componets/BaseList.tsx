
import { Checkbox, IconButton, Stack, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ReactComponent as EmptySvg } from '../../../assets/images/grid-empty.svg';
import { Base, BaseListProps } from '../types';
import Tippy from '@tippyjs/react';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import 'tippy.js/dist/tippy.css'
//Giao diện trang chủ hiển thị tất cả Account mà Admin quản lý
export default function BaseList(props: BaseListProps) {
    const { rows, onBaseDeleteClick, onBaseEditClick, onCheckboxAllChange, onCheckboxChange } = props;
    const handleEditClick = (row: Base) => {
        if (onBaseEditClick) onBaseEditClick?.(row);
    };
    const handleDeleteClick = (row: Base) => {
        if (onBaseDeleteClick) onBaseDeleteClick?.(row);
    };
    return (
        <TableContainer component={Paper} sx={{ maxHeight: 600, marginTop: "20px" }}>
            <Table sx={{ minWidth: 700 }} size="small">
                <TableHead>
                    <TableRow>                     
                        <TableCell>#</TableCell>
                        <TableCell>Mã cơ sở</TableCell>
                        <TableCell>Tên cơ sở</TableCell>
                        <TableCell>Địa chỉ</TableCell>
                        <TableCell align="center">Tác vụ</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows?.map((row, index) => {
                        return (
                            <TableRow key={row._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>{index + 1 /* + pageSize * (currentPage - 1) */}</TableCell>
                                <TableCell>{row._id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.address}</TableCell>
                                <TableCell align="center">
                                    <Stack direction="row" spacing={2} justifyContent="center">
                                        <Tippy content="Chỉnh sửa nhóm tài sản">
                                            <IconButton onClick={() => handleEditClick(row)}>
                                                <CreateIcon />
                                            </IconButton>
                                        </Tippy>
                                        <Tippy content="Xóa nhóm tài sản">
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


