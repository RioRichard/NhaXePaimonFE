import { PayloadAction } from '@reduxjs/toolkit';
import { IParams, ResponseList, Response } from '../../model';
import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { Bus } from './types';
import { history } from '../../utils'; 
import { busActions } from './BusSlice';
import busesApi from '../../api/busApi';

function* busFetch(action: PayloadAction<IParams>) {
    try {
        yield delay(500);
        const response: ResponseList<Bus> = yield call(busesApi.fetchBus, action.payload);
        yield put(busActions.fetchBusSuccess(response));
    } catch (error: any) {
        yield put(busActions.fetchBusFailed(error));
    }
}
function* busCreate(action: PayloadAction<Bus>) {
    try {
        const data: Response<Bus> = yield call(busesApi.createBus, action.payload);
        yield put(busActions.createBusSuccess(data));
        yield call(history.push, '/admin/bus');
    } catch (error: any) {
        yield put(busActions.createBusFailed(error));
    }
}

function* busUpdate(action: PayloadAction<Bus>) {
    try {
        const data: Response<Bus> = yield call(busesApi.updateBus, action.payload);
        yield put(busActions.updateBusSuccess(data));
        yield call(history.push, '/admin/bus');
    } catch (error: any) {
        yield put(busActions.updateBusFailed(error));
    }
}
export default function* busSaga() {
    yield takeLatest(busActions.fetchBus.type, busFetch);
    yield takeEvery(busActions.createBus.type, busCreate);
    yield takeEvery(busActions.updateBus.type, busUpdate);
}