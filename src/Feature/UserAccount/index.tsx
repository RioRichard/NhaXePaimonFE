
import { Route, Routes } from 'react-router-dom';
import Edit from './page/Edit';
import Main from './page/Main';
import UserOwnEditForm from './components/UserOwnEditForm';


export default function UserAccount() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="sua-doi" element={<Edit />} />
        </Routes>
    );
}
