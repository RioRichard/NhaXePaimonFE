import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import AddEdit from './pages/AddEdit';

export default function Routee() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path=":routeId" element={<AddEdit />} />
            <Route path="them-moi" element={<AddEdit />} />
        </Routes>
    );
}
