import { PayloadAction } from '@reduxjs/toolkit';
import { IParams, ResponseList, Response } from '../../model';
import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { Routes } from './types';
import { history } from '../../utils'; 
import { routesActions } from './RoutesSlice';
import routeApi from '../../api/routeApi';

function* routesFetch(action: PayloadAction<IParams>) {
    try {
        yield delay(500);
        const response: ResponseList<Routes> = yield call(routeApi.fetchRoutes, action.payload);
        yield put(routesActions.fetchRoutesSuccess(response));
    } catch (error: any) {
        yield put(routesActions.fetchRoutesFailed(error));
    }
}
function* routesCreate(action: PayloadAction<Routes>) {
    try {
        const data: Response<Routes> = yield call(routeApi.createRoutes, action.payload);
        yield put(routesActions.createRoutesSuccess(data));
        yield call(history.push, '/admin/routes');
    } catch (error: any) {
        yield put(routesActions.createRoutesFailed(error));
    }
}

function* routesUpdate(action: PayloadAction<Routes>) {
    try {
        const data: Response<Routes> = yield call(routeApi.updateRoutes, action.payload);
        yield put(routesActions.updateRoutesSuccess(data));
        yield call(history.push, '/admin/routes');
    } catch (error: any) {
        yield put(routesActions.updateRoutesFailed(error));
    }
}
export default function* routesSaga() {
    yield takeLatest(routesActions.fetchRoutes.type, routesFetch);
    yield takeEvery(routesActions.createRoutes.type, routesCreate);
    yield takeEvery(routesActions.updateRoutes.type, routesUpdate);
}