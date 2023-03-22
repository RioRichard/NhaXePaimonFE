
import { useForm } from 'react-hook-form';
import { Typography, Container, Stack, Button, TableBody } from '@mui/material';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';



export default function UserInformationForm() {
    const methods = useForm<any>({
    });
    return (
        <Container maxWidth="lg" style={{ marginTop: "40px" }} >
            <TableContainer sx={{ maxHeight: 600 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ height: "25px", alignItems: "center" }}>
                            <TableCell colSpan={10} sx={{ textAlign: "center", fontSize: "25px" }}>{"Thông tin tài khoản"}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell colSpan={10} align="center" sx={{ p: 4 }}>
                                <Typography variant="h6" color="secondary" sx={{ mt: 1 }}>
                                    Không tìm thấy thông tin
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <Stack direction="row-reverse" spacing={2} sx={{ marginTop: "15px" }}>
                <Button variant="contained" color="primary" sx={{ ml: 1 }}>
                    Sửa đổi thông tin tài khoản
                </Button>
            </Stack>
        </Container>

    )
}