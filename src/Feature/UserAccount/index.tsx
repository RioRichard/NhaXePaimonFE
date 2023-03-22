
import { Route, Routes } from 'react-router-dom';
import Main from './page/Main';

export default function UserAccount() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path=":staffId" element={<Main />} />
        </Routes>
    );
}
