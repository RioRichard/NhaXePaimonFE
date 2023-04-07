
import { Typography, Stack, Table, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { ReactComponent as EmptySvg } from '../../../assets/images/grid-empty.svg';
import { Manager, ManagerListProps } from '../types';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

//Giao diện trang chủ hiển thị tất cả Account mà Admin quản lý
export default function ManagerList(props: ManagerListProps) {
    const { rows, onManagerEditClick, onManagerDeleteClick } = props;

    const handleEditClick = (row: Manager) => {
        if (onManagerEditClick) onManagerEditClick?.(row);
    };

    const handleDeleteClick = (row: Manager) => {
        if (onManagerDeleteClick) onManagerDeleteClick?.(row);
    };

    return (
        <TableContainer component={Paper} sx={{ maxHeight: 600, marginTop: "20px" }}>
            <Table sx={{ minWidth: 700 }} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Id nhân viên</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Số điện thoại</TableCell>
                        <TableCell>Vai trò</TableCell>
                        <TableCell align="center">Tác vụ</TableCell>
                    </TableRow>
                </TableHead>
                {
                    rows?.length > 0 ? (
                        rows.map((row, index) => (
                            <TableRow key={row._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{row._id}</TableCell>
                                <TableCell>{row.username}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.phone}</TableCell>
                                <TableCell>{row.role}</TableCell>
                                <TableCell align="center">
                                    <Stack direction="row" spacing={2} justifyContent="center">
                                        <Tippy content="Chỉnh sửa">
                                            <IconButton onClick={() => handleEditClick(row)}>
                                                <CreateIcon />
                                            </IconButton>
                                        </Tippy>
                                        <Tippy content="Xóa đơn">
                                            <IconButton onClick={() => handleDeleteClick(row)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </Tippy>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableBody>
                            <TableRow>
                                <TableCell colSpan={9} align="center" sx={{ p: 4 }}>
                                    <EmptySvg></EmptySvg>
                                    <Typography variant="h6" color="secondary" sx={{ mt: 1 }}>
                                        Không tìm thấy người dùng phù hợp
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    )
                }
            </Table>
        </TableContainer>
    );
}


