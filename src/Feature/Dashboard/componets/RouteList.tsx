
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ReactComponent as EmptySvg } from '../../../assets/images/grid-empty.svg';
import { Routes } from '../../Routes/types';
import Chip from '@mui/material/Chip';
import LocationOnIcon from '@mui/icons-material/LocationOn';
interface RouteListProps {
    rows: Routes[];
}
export default function RouteList(props: RouteListProps) {
    const { rows } = props

    return (
        <TableContainer component={Paper} sx={{ maxHeight: 250 }}>
            <Table size="small" stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell align="center">Mã tuyến</TableCell>
                        <TableCell align="center">Từ</TableCell>
                        <TableCell align="center">Đến</TableCell>
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
                                    <Chip icon={<LocationOnIcon />} label={row?.from?.name} size="small" color="warning" variant="outlined" />
                                </TableCell>
                                <TableCell align="center">
                                    <Chip icon={<LocationOnIcon />} label={row?.from?.name} size="small" color="warning" variant="outlined" />
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

