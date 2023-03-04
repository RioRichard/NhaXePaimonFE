import Main from "./pages/Main";
import { Route, Routes,Navigate } from 'react-router-dom';
export default function Step3() {
    return (
        <Routes>
            <Route path="/test3" element={<Main />} />
        </Routes>
    );
}