import { PayloadAction } from '@reduxjs/toolkit';
import authApi from '../../api/authApi';
import userApi from '../../api/userApi';
import { User } from '../User/types';
import { Response } from '../../model';
import { call, delay, put, takeEvery } from 'redux-saga/effects';
import { history } from '../../utils';
import storage from '../../utils/storage';
import { authActions, LoginPayload } from './authSlice';
import { ResponseAuth } from './types';
import { redirect } from 'react-router-dom';
function* handleLogin(action: PayloadAction<LoginPayload>) {
    try {
        yield delay(1000);
        const response: ResponseAuth = yield call(authApi.login, action.payload);
        yield put(authActions.loginSuccess(response));
        console.log(response);
        
        storage.setAccessToken(response.data?.token);
        yield call(history.push, '/');
    } catch (error: any) {
        yield put(authActions.loginFailed(error));
    }
}
function* handleAdminLogin(action: PayloadAction<LoginPayload>) {
    try {
        yield delay(1000);
        const response: ResponseAuth = yield call(authApi.adminLogin, action.payload);
        yield put(authActions.loginSuccess(response));
        storage.setAdminAccessToken(response.data?.token);
        yield call(history.push, 'admin/trang-chu');
    } catch (error: any) {
        yield put(authActions.loginFailed(error));
    }
}

function* handleLogout() {
    yield delay(500);
    storage.clearToken();
    // Redirect to Login page
    yield call(history.push, '/login');
}
function* handleAdminLogout() {
    yield delay(500);
    storage.clearAdminToken();
    // Redirect to Login page
    yield call(history.push, '/adminLogin');
}

function* handleRegister(action: PayloadAction<User>) {
    try {
        yield delay(1000);
        const data: Response<User> = yield call(userApi.createUser, action.payload);
        yield put(authActions.registerSuccess(data));
        yield call(history.push, '/login');
    } catch (error: any) {
        yield put(authActions.registerFailed(error));
    }
}

export default function* authSaga() {
    // yield fork(watchLoginFlow);
    yield takeEvery(authActions.register.type, handleRegister);
    yield takeEvery(authActions.login.type, handleLogin);
    yield takeEvery(authActions.adminLogin.type, handleAdminLogin);
    yield takeEvery(authActions.logout.type, handleLogout);
    yield takeEvery(authActions.adminLogout.type, handleAdminLogout);
}
