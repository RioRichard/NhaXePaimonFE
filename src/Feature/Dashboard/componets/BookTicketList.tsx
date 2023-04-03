
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ReactComponent as EmptySvg } from '../../../assets/images/grid-empty.svg';
import { Order } from '../../Order/types';
import Chip from '@mui/material/Chip';
import BoltIcon from '@mui/icons-material/Bolt';
interface OrderListProps {
    rows: Order[];
}
export default function BookTicketList(props: OrderListProps) {
    const { rows } = props;
    return (
        <TableContainer component={Paper} sx={{ maxHeight: 250 }}>
            <Table size="small" stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell align="center">Mã đơn đặt vé</TableCell>
                        <TableCell align="center">Tình trạng</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows?.length > 0 ? (
                        rows.map((row, index) => (
                            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {index + 1}
                                </TableCell>
                                <TableCell align="center">{row.id}</TableCell>
                                <TableCell align="center">
                                    <Chip icon={<BoltIcon />} label={row.status} size="small" color="warning" variant="outlined" />
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (<TableRow>
                        <TableCell colSpan={3} align="center">
                            <EmptySvg style={{ width: '140px', height: '140px' }} />
                            <Typography variant="h6" color="secondary">
                                Không có dữ liệu
                            </Typography>
                        </TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

