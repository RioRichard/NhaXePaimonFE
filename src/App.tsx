import React from 'react';
import logo from './logo.svg';
import LoginPage from './Feature/auth/pages/LoginPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserLayout } from './layout/User';
import RegisterPage from './Feature/auth/pages/RegisterPage';
import { AdminLayout } from 'layout/Admin/Admin';
import { Sidebar } from 'layout/Admin/Sidebar';
import { Header } from 'layout/Admin/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="trang-chu" />} />
        <Route path="*" element={<UserLayout/>} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="admin/*" element={<AdminLayout/>}/>
      </Routes>
    </div>
  );
}

export default App;
