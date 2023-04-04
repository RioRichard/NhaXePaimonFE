import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import Footer from './Footer';
import { Box } from '@mui/material';
import User from '../Feature/User';
import TermOfUsePage from '../Feature/BusinessPage/TermOfUsePage';
import PrivacyPolicyPage from '../Feature/BusinessPage/PrivacyPolicyPage';
import OperatingPolicyPage from '../Feature/BusinessPage/OperatingPolicyPage';
import BookTicket from '../Feature/BookTicket';
import UserAccount from '../Feature/UserAccount';

export function UserLayout() {
    return (
        <Box sx={{
            display: 'grid',
            gridTemplateRows: 'auto 1fr',
            gridTemplateColumns: '220px 1fr',
            gridTemplateAreas:
                `" header header" 
            "main main" 
            "footer footer"`,
            minHeight: '100vh'
        }}>
            <Box sx={{ gridArea: 'header' }}>
                <Header />
            </Box>
            <Box sx={{
                gridArea: 'main',
            }}>
                <Routes>
                    <Route path="/" element={<Navigate to="trang-chu" />} />
                    <Route path="trang-chu" element={<BookTicket />} />
                    <Route path="/nguoi-dung/*" element={<User />} />
                    <Route path="/termofuse/*" element={<TermOfUsePage />} />
                    <Route path="/privacypolicy/*" element={<PrivacyPolicyPage />} />
                    <Route path="/operatingpolicy/*" element={<OperatingPolicyPage />} />
                    <Route path="tai-khoan/*" element={<UserAccount />} />

                </Routes>
            </Box>
            <Box sx={{ gridArea: 'footer' }}>
                <Footer />
            </Box>
        </Box>
    )
}