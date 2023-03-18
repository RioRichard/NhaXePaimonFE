
import { Typography, Stack, Table, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { ReactComponent as EmptySvg } from '../../../assets/images/grid-empty.svg';
import { User, UserListProps } from '../types';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

//Giao diện trang chủ hiển thị tất cả User mà Admin quản lý
export default function UserList(props: UserListProps) {
    const { rows, onUserEditClick, onUserDeleteClick } = props;

    const handleEditClick = (row: User) => {
        if (onUserEditClick) onUserEditClick?.(row);
    };

    const handleDeleteClick = (row: User) => {
        if (onUserDeleteClick) onUserDeleteClick?.(row);
    };

    return (
        <TableContainer component={Paper} sx={{ maxHeight: 600, marginTop: "20px" }}>
            <Table sx={{ minWidth: 700 }} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Mã tài khoản</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Số điện thoại</TableCell>
                        <TableCell align="center">Tác vụ</TableCell>
                    </TableRow>
                </TableHead>
                {
                    rows?.length > 0 ? (
                        rows.map((row, index) => (
                            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.username}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.phone}</TableCell>
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


