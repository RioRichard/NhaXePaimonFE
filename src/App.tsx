
import LoginPage from './Feature/auth/pages/LoginPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserLayout } from './layout/User';
import RegisterPage from './Feature/auth/pages/RegisterPage';
import { AdminLayout } from './layout/Admin/Admin';
import { PrivateUserRoute } from './Feature/auth/components/PrivateUserRoute';
import { PrivateAdminRoute } from './Feature/auth/components/PrivateAdminRoute';
import AdminLoginPage from './Feature/auth/pages/AdminLoginPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="trang-chu" />} />
        <Route path="*"
          element={
            <PrivateUserRoute>
              <UserLayout />
            </PrivateUserRoute>
          } />
        <Route path="admin/" element={<Navigate to="trang-chu" />} />
        <Route path="admin/*"
          element={
            <PrivateAdminRoute>
              <AdminLayout />
            </PrivateAdminRoute>
          } />
        <Route path="login" element={<LoginPage />} />
        <Route path="adminLogin" element={<AdminLoginPage />} />
        <Route path="register" element={<RegisterPage />} />

      </Routes>
    </div>
  );
}

export default App;
