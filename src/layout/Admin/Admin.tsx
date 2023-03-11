import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Theme } from '@mui/material/styles';
import { NotFound } from 'components/Common';
import { lazy } from 'react';


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
        /*         padding: theme.spacing(2, 3), */
        backgroundColor: '#eeeeee'
    }
}));

export function AdminLayout() {
    const classes = useStyles();
    // const loading = useAppSelector(selectDashboardLoading);
    return (
        <Box className={classes.root}>
            {/* {loading && <Loading overlay={true} />} */}
            <Box className={classes.header}>
                <Header />
            </Box>
            <Box className={classes.sidebar}>
                <Sidebar />
            </Box>
            <Box className={classes.main}>
                <Routes>
                    <Route path="/" element={<Navigate to="/admin/trang-chu" />} />
                    {/*<Route path="ho-so/*" element={
                        <CommmonUserRoute module="briefs">
                            <Briefs />
                        </CommmonUserRoute>
                    } /> */}

                    <Route path="*" element={<NotFound />} />
                    {/* <Route path="ho-so/:id/minh-chung/them-moi" element={<Proofs />} />
                    <Route path="/trang-chu" element={<Dashboard />} />
                    <Route path="tai-san/*" element={<Assets />} />

                    <Route
                        path="nguoi-dung/*"
                        element={
                            <PrivateAdminRoute>
                                <Users />
                            </PrivateAdminRoute>
                        }
                    /> */}




                </Routes>
            </Box>
        </Box>
    );
}
