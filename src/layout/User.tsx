import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import Footer from './Footer';
import { Box } from '@mui/material';
import Step1 from '../Feature/BookTicket/components/Step1';
import Step3 from '../Feature/BookTicket/components/Step3';
import Step4 from '../Feature/BookTicket/components/Step4';
import User from '../Feature/User';
import TermOfUsePage from '../Feature/BusinessPage/TermOfUsePage';
import PrivacyPolicyPage from '../Feature/BusinessPage/PrivacyPolicyPage';
import OperatingPolicyPage from '../Feature/BusinessPage/OperatingPolicyPage';
import BookTicket from '../Feature/BookTicket';

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
            minHeight: '150vh'
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

                </Routes>
            </Box>
            <Box sx={{ gridArea: 'footer' }}>
                <Footer></Footer>
            </Box>
        </Box>
    )
}