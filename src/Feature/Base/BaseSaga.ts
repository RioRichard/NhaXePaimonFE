import { PayloadAction } from '@reduxjs/toolkit';
import { IParams, ResponseList, Response } from '../../model';
import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { Base } from './types';
import { history } from '../../utils'; 
import { baseActions } from './BaseSlice';
import basesApi from '../../api/baseApi';

function* basesFetch(action: PayloadAction<IParams>) {
    try {
        yield delay(500);
        const response: ResponseList<Base> = yield call(basesApi.fetchBase, action.payload);
        yield put(baseActions.fetchBasesSuccess(response));
    } catch (error: any) {
        yield put(baseActions.fetchBaessFailed(error));
    }
}
function* basesCreate(action: PayloadAction<Base>) {
    try {
        const data: Response<Base> = yield call(basesApi.createBase, action.payload);
        yield put(baseActions.createBasesSuccess(data));
        yield call(history.push, '/admin/base');
    } catch (error: any) {
        yield put(baseActions.createBasesFailed(error));
    }
}

function* basesUpdate(action: PayloadAction<Base>) {
    try {
        const data: Response<Base> = yield call(basesApi.updateBases, action.payload);
        yield put(baseActions.updateBasesSuccess(data));
        yield call(history.push, '/admin/base');
    } catch (error: any) {
        yield put(baseActions.updateBasesFailed(error));
    }
}
export default function* baseSaga() {
    yield takeLatest(baseActions.fetchBases.type, basesFetch);
    yield takeEvery(baseActions.createBases.type, basesCreate);
    yield takeEvery(baseActions.updateBases.type, basesUpdate);
}