import { PayloadAction } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';
import { IParams, Response, ResponseList } from '../../model';
import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { history } from '../../utils'; 
import { userActions } from './userSlice';
import { User } from './types';
import React from "react";

function* userFetch(action: PayloadAction<IParams>) {
    try {
        yield delay(500);
        const response: ResponseList<User> = yield call(userApi.fetchUser, action.payload);
        yield put(userActions.fetchUserSuccess(response));
    } catch (error: any) {
        yield put(userActions.fetchUserFailed(error));
    }
}


export default function* userSaga() {
    yield takeLatest(userActions.fetchUser.type, userFetch);
}
