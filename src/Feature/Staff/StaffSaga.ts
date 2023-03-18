import { PayloadAction } from '@reduxjs/toolkit';
import { IParams, ResponseList, Response } from '../../model';
import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { Staff } from './types';
import { history } from '../../utils'; 
import { staffActions } from './StaffSlice';
import basesApi from '../../api/baseApi';
import staffApi from '../../api/staffApi';

function* staffFetch(action: PayloadAction<IParams>) {
    try {
        yield delay(500);
        const response: ResponseList<Staff> = yield call(staffApi.fetchStaff, action.payload);
        yield put(staffActions.fetchStaffSuccess(response));
    } catch (error: any) {
        yield put(staffActions.fetchStaffFailed(error));
    }
}
function* staffCreate(action: PayloadAction<Staff>) {
    try {
        const data: Response<Staff> = yield call(staffApi.createStaff, action.payload);
        yield put(staffActions.createStaffSuccess(data));
        yield call(history.push, '/admin/staff');
    } catch (error: any) {
        yield put(staffActions.createStaffFailed(error));
    }
}

function* staffUpdate(action: PayloadAction<Staff>) {
    try {
        const data: Response<Staff> = yield call(staffApi.updateStaff, action.payload);
        yield put(staffActions.updateStaffSuccess(data));
        yield call(history.push, '/admin/base');
    } catch (error: any) {
        yield put(staffActions.updateStaffFailed(error));
    }
}
export default function* staffSaga() {
    yield takeLatest(staffActions.fetchStaff.type, staffFetch);
    yield takeEvery(staffActions.createStaff.type, staffCreate);
    yield takeEvery(staffActions.updateStaff.type, staffUpdate);
}