import React from 'react';
import logo from './logo.svg';
import LoginPage from './feature/auth/pages/LoginPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserLayout } from './layout/User';
import RegisterPage from './feature/auth/pages/RegisterPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="trang-chu" />} />
        <Route path="*" element={<UserLayout/>} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
