
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ReactComponent as EmptySvg } from '../../../assets/images/grid-empty.svg';
import { User } from '../../User/types';
import Chip from '@mui/material/Chip';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

interface UserListProps {
    rows: any[];
}
export default function AccountList(props: UserListProps) {
    const { rows } = props
    return (
        <TableContainer component={Paper} sx={{ maxHeight: 250 }}>
            <Table size="small" stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell align="center">Mã tài khoản</TableCell>
                        <TableCell align="center">User name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows?.length > 0 ? (
                        rows.map((row, index) => (
                            <TableRow key={row._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {index + 1}
                                </TableCell>
                                <TableCell align="center">{row._id}</TableCell>
                                <TableCell align="center">
                                    <Chip icon={<VerifiedUserIcon />} label={row?.username} size="small" color="warning" variant="outlined" />
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

