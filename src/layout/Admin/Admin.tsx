import { Box } from '@mui/material';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Theme } from '@mui/material/styles';
import { NotFound } from '../../components/Common';
import { makeStyles } from '@mui/styles';
import Account from '../../Feature/Account';
import HomePage from '../../Feature/Dashboard/page/HomePage';
import Discount from '../../Feature/Discount';

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
            <Box className={classes.main}>
                <Routes>
                    <Route path="/" element={<Navigate to="/admin/trang-chu" />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="tai-khoan/*" element={<Account />} />
                    <Route path="trang-chu" element={<HomePage />} />
                    <Route path="khuyen-mai/*" element={<Discount />} />
                </Routes>
            </Box>
        </Box>
    );
}
