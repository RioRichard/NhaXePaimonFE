import { PayloadAction } from '@reduxjs/toolkit';
import managerApi from '../../api/managerApi';
import { IParams, ResponseList } from '../../model';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { Manager } from './types';
import { managerActions } from './managerSlice';

function* managersFetch(action: PayloadAction<IParams>) {
    try {
        yield delay(500);
        const response: ResponseList<Manager> = yield call(managerApi.fetchManagers, action.payload);
        yield put(managerActions.fetchManagersSuccess(response));
    } catch (error: any) {
        yield put(managerActions.fetchManagersFailed(error));
    }
}
export default function* managerSaga() {
    yield takeLatest(managerActions.fetchManagers.type, managersFetch);
}