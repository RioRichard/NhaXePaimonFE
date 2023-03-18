import { PayloadAction } from '@reduxjs/toolkit';
import managerApi from '../../api/managerApi';
import { IParams, ResponseList,Response } from '../../model';
import { call, delay, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { Manager } from './types';
import { managerActions } from './managerSlice';
import { history } from '../../utils/history';
function* managersFetch(action: PayloadAction<IParams>) {
    try {
        yield delay(500);
        const response: ResponseList<Manager> = yield call(managerApi.fetchManagers, action.payload);
        yield put(managerActions.fetchManagersSuccess(response));
    } catch (error: any) {
        yield put(managerActions.fetchManagersFailed(error));
    }
}
function* managerUpdate(action: PayloadAction<Manager>) {
    try {
        const data: Response<Manager> = yield call(managerApi.updateManager, action.payload);
        yield put(managerActions.updateManagerSuccess(data));
        yield call(history.push, '/admin/manager');
    } catch (error: any) {
        yield put(managerActions.updateManagerFailed(error));
    }
}
function* managerCreate(action: PayloadAction<Manager>) {
    try {
        const data: Response<Manager> = yield call(managerApi.createManager, action.payload);
        yield put(managerActions.createManagerSuccess(data));
        yield call(history.push, '/admin/manager');
    } catch (error: any) {
        yield put(managerActions.createManagerFailed(error));
    }
}

export default function* managerSaga() {
    yield takeLatest(managerActions.fetchManagers.type, managersFetch);
    yield takeEvery(managerActions.updateManager.type, managerUpdate);
    yield takeEvery(managerActions.createManager.type, managerCreate);
}