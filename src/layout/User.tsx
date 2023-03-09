import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import { Box } from '@mui/material';
import Step1 from '../feature/BookTicket/page/Step1';
import Step3 from '../feature/BookTicket/page/Step3';
import Step4 from '../feature/BookTicket/page/Step4';
import User from '../feature/User';
import { NotFound } from './NotFound';


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
                    <Route path="trang-chu" element={<Step1 />} />
                    <Route path="/chon-ghe" element={<Step3 />} />
                    <Route path="/thanh-toan" element={<Step4 />} />
                    <Route path="/tai-khoan/:id" element={<User />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Box>
        </Box>
    )
}