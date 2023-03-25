import managerSaga from "../Feature/Manager/managerSaga";
import baseSaga from "../Feature/Base/BaseSaga";
import staffSaga from "../Feature/Staff/StaffSaga";
import routesSaga from "../Feature/Routes/RoutesSaga";
import busSaga from "../Feature/Bus/BusSaga";
import userSaga from "../Feature/User/userSaga";
import { all } from 'redux-saga/effects';
export default function* rootSaga() {
    yield all([
        managerSaga(),
        baseSaga(),
        staffSaga(),
        routesSaga(),
        busSaga(),
        userSaga(),
    ]);
}
