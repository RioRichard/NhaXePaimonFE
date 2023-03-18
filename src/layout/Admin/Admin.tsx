import { Box } from '@mui/material';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Theme } from '@mui/material/styles';
import { NotFound } from '../../components/Common';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Account from '../../Feature/Account';
import HomePage from '../../Feature/Dashboard/page/HomePage';
import Discount from '../../Feature/Discount';
import Manager from '../../Feature/Manager';
import Order from '../../Feature/Order';
import Base from '../../Feature/Base';
import Routee from '../../Feature/Routes';
import Staff from '../../Feature/Staff';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        gridTemplateColumns: '220px 1fr',
        gridTemplateAreas: `"sidebar header" "sidebar main" "sidebar footer"`,
        minHeight: '100vh'
    },

    header: {
        gridArea: 'header'
    },

    footer: {
        gridArea: 'footer',
        backgroundColor: '#eeeeee'
    },

    sidebar: {
        gridArea: 'sidebar',
        fontSize: '14px'
    },

    main: {
        gridArea: 'main',
        backgroundColor: '#eeeeee'
    }
}));

export function AdminLayout() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.header}>
                <Header />
            </Box>
            <Box className={classes.sidebar}>
                <Sidebar />
            </Box>
            
            <Box sx={{}} className={classes.main}>
                <Routes>
                    <Route path="/" element={<Navigate to="/admin/trang-chu" />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="user/*" element={<Account />} />
                    <Route path="trang-chu" element={<HomePage />} />
                    <Route path="khuyen-mai/*" element={<Discount />} />
                    <Route path="manager/*" element={<Manager />} />
                    <Route path="order/*" element={<Order />} />
                    <Route path="base/*" element={<Base />} />
                    <Route path="route/*" element={<Routee />} />
                    <Route path="staff/*" element={<Staff />} />
                </Routes>
            </Box>
        </Box>
    );
}
