
import { useForm } from 'react-hook-form';
import { Typography, Container, Stack, Button, TableBody } from '@mui/material';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
interface infoListProps {
    rows: any;
}
export default function UserInformationForm(props: infoListProps) {
    const { rows } = props
    const location = useLocation();
    return (
        <Container maxWidth="lg" style={{ marginTop: "40px" }} >
            <TableContainer sx={{ maxHeight: 600 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ height: "25px", alignItems: "center" }}>
                            <TableCell colSpan={10} sx={{ textAlign: "center", fontSize: "25px" }}>{"Thông tin tài khoản"}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">ID tài khoản</TableCell>
                            <TableCell align="center">Username</TableCell>
                            <TableCell align="center">Họ tên</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Số điện thoại</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows ? (
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell align="center">{rows?.id}</TableCell>
                                <TableCell align="center">{rows?.username}</TableCell>
                                <TableCell align="center">{rows?.name}</TableCell>
                                <TableCell align="center">{rows?.email}</TableCell>
                                <TableCell align="center">{rows?.phone}</TableCell>
                            </TableRow>
                        )
                            : (<TableRow>
                                <TableCell colSpan={10} align="center" sx={{ p: 4 }}>
                                    <Typography variant="h6" color="secondary" sx={{ mt: 1 }}>
                                        Không tìm thấy thông tin
                                    </Typography>
                                </TableCell>
                            </TableRow>)}
                    </TableBody>
                </Table>
            </TableContainer>

            <Stack direction="row-reverse" spacing={2} sx={{ marginTop: "15px" }}>
                <Link to={`${location.pathname}/sua-doi`} style={{ textDecoration: "none" }}>
                    <Button variant="contained" color="primary" sx={{ ml: 1 }}>
                        Sửa đổi thông tin tài khoản
                    </Button>
                </Link>

            </Stack>
        </Container>

    )
}