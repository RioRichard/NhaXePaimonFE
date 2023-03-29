import { Route, Routes } from 'react-router-dom';
import Main from './page/Main';

export default function BookTicket() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
        </Routes>
    );
}
