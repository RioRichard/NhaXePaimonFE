
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ReactComponent as EmptySvg } from '../../../assets/images/grid-empty.svg';

//Giao diện trang chủ hiển thị tất cả Account mà Admin quản lý
export default function RouteList() {

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
                        <TableCell>Tài xế</TableCell>
                        <TableCell>Phu xe</TableCell>
                        <TableCell>Giá</TableCell>
                        <TableCell>Trạng Thái</TableCell>
                        <TableCell align="center">Tác vụ</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell colSpan={9} align="center" sx={{ p: 4 }}>
                            <EmptySvg></EmptySvg>
                            <Typography variant="h6" color="secondary" sx={{ mt: 1 }}>
                                Không tìm thấy mã khuyến mãi phù hợp
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}


