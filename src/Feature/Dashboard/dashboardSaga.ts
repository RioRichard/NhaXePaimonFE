import busesApi from '../../api/busApi';
import orderApi from '../../api/orderApi';
import { Order } from '../Order/types';
import { Bus } from '../Bus/types';
import { Routes } from '../Routes/types';
import { all, call, delay, put, takeLatest } from 'redux-saga/effects';
import { ResponseList } from '../../model';
import { dashboardActions } from './dashboardSlice';
import routeApi from '../../api/routeApi';
import userApi from '../../api/userApi';


function* fetchNewOrderList() {
    const { data }: ResponseList<Order> = yield call(orderApi.fetchOrders, {
        _page: 1,
        _limit: 100,
    });
    yield put(dashboardActions.setNewOrderList(data));
}
function* fetchNewBusList() {
    const { data }: ResponseList<Bus> = yield call(busesApi.fetchBus, {
        _page: 1,
        _limit: 100,
    });
    yield put(dashboardActions.setNewBusList(data));
}
function* fetchNewRouteList() {
    const { data }: ResponseList<Routes> = yield call(routeApi.fetchRoutes, {
        _page: 1,
        _limit: 100,
    });
    yield put(dashboardActions.setNewRouteList(data));
}
function* fetchNewUserList() {
    const { data }: ResponseList<Routes> = yield call(userApi.fetchUsers, {
        _page: 1,
        _limit: 100,
    });
    yield put(dashboardActions.setNewUserList(data));
}
function* fetchDashboardData() {
    try {
        yield delay(500);
        yield all([, call(fetchNewOrderList), call(fetchNewBusList), call(fetchNewRouteList), call(fetchNewUserList)]);
        yield put(dashboardActions.fetchDataSuccess());
    } catch (error) {
        yield put(dashboardActions.fetchDataFailed());
    }
}

export default function* dashboardSaga() {
    yield takeLatest(dashboardActions.fetchData.type, fetchDashboardData);
}
