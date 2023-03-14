
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ReactComponent as EmptySvg } from '../../../assets/images/grid-empty.svg';

export default function BookTicketList() {
   
    return (
        <TableContainer component={Paper} sx={{ maxHeight: 250 }}>
            <Table size="small" stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell align="right">Mã vé</TableCell>
                        <TableCell align="right">Thời gian đặt</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        <TableRow>
                            <TableCell colSpan={3} align="center">
                                <EmptySvg style={{ width: '140px', height: '140px' }} />
                                <Typography variant="h6" color="secondary">
                                    Không có dữ liệu
                                </Typography>
                            </TableCell>
                        </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

