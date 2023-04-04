import { PayloadAction } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';
import { IParams, ResponseList, Response } from '../../model';
import { call, delay, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { User } from './types';
import { userActions } from './userSlice';
import { history } from '../../utils/history';
function* usersFetch(action: PayloadAction<IParams>) {
    try {
        yield delay(500);
        const response: ResponseList<User> = yield call(userApi.fetchUsers, action.payload);
        yield put(userActions.fetchUsersSuccess(response));
    } catch (error: any) {
        yield put(userActions.fetchUsersFailed(error));
    }
}
function* userUpdate(action: PayloadAction<User>) {
    try {
        const data: Response<User> = yield call(userApi.updateUser, action.payload);
        yield put(userActions.updateUserSuccess(data));
        yield call(history.push, '/admin/user');
    } catch (error: any) {
        yield put(userActions.updateUserFailed(error));
    }
}
function* userOwnUpdate(action: PayloadAction<User>) {
    try {
        const data: Response<User> = yield call(userApi.updateUser, action.payload);
        yield put(userActions.updateUserOwnSuccess(data));
        yield call(history.push, '/tai-khoan');
    } catch (error: any) {
        yield put(userActions.updateUserOwnFailed(error));
    }
}
function* userCreate(action: PayloadAction<User>) {
    try {
        const data: Response<User> = yield call(userApi.createUser, action.payload);
        yield put(userActions.createUserSuccess(data));
        yield call(history.push, '/admin/user');
    } catch (error: any) {
        yield put(userActions.createUserFailed(error));
    }
}

export default function* userSaga() {
    yield takeLatest(userActions.fetchUsers.type, usersFetch);
    yield takeEvery(userActions.updateUser.type, userUpdate);
    yield takeEvery(userActions.createUser.type, userCreate);
    yield takeEvery(userActions.updateOwnUser.type, userOwnUpdate);
}