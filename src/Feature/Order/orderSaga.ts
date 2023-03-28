import { PayloadAction } from '@reduxjs/toolkit';
import orderApi from '../../api/orderApi';
import { IParams, ResponseList,Response } from '../../model';
import { call, delay, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { Order } from './types';
import { orderActions } from './orderSlice';
import { history } from '../../utils/history';
function* ordersFetch(action: PayloadAction<IParams>) {
    try {
        yield delay(500);
        const response: ResponseList<Order> = yield call(orderApi.fetchOrders, action.payload);
        yield put(orderActions.fetchOrdersSuccess(response));
    } catch (error: any) {
        yield put(orderActions.fetchOrdersFailed(error));
    }
}
function* orderUpdate(action: PayloadAction<Order>) {
    try {
        const data: Response<Order> = yield call(orderApi.updateOrder, action.payload);
        yield put(orderActions.updateOrderSuccess(data));
        yield call(history.push, '/admin/order');
    } catch (error: any) {
        yield put(orderActions.updateOrderFailed(error));
    }
}
function* orderCreate(action: PayloadAction<Order>) {
    try {
        const data: Response<Order> = yield call(orderApi.createOrder, action.payload);
        yield put(orderActions.createOrderSuccess(data));
        yield call(history.push, '/admin/order');
    } catch (error: any) {
        yield put(orderActions.createOrderFailed(error));
    }
}

export default function* orderSaga() {
    yield takeLatest(orderActions.fetchOrders.type, ordersFetch);
    yield takeEvery(orderActions.updateOrder.type, orderUpdate);
    yield takeEvery(orderActions.createOrder.type, orderCreate);
}