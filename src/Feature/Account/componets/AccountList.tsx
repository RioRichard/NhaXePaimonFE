
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';

//Giao diện trang chủ hiển thị tất cả Account mà Admin quản lý
function UserList() {
    return (
        <TableContainer component={Paper} sx={{ maxHeight: 600, marginTop:"20px" }}>
            <Table sx={{ minWidth: 700 }} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Mã tài khoản</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Họ và tên</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Số điện thoại</TableCell>
                        <TableCell>Vai trò</TableCell>
                        <TableCell>Trạng thái</TableCell>
                        <TableCell align="center">Tác vụ</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        <TableRow>
                            <TableCell colSpan={9} align="center" sx={{ p: 4 }}>
                                <Typography variant="h6" color="secondary" sx={{ mt: 1 }}>
                                    Không tìm thấy người dùng nào phù hợp
                                </Typography>
                            </TableCell>
                        </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default React.memo(UserList);
