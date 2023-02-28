import Main from "./pages/Main";
import { Route, Routes,Navigate } from 'react-router-dom';
export default function Step2() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
        </Routes>
    );
}