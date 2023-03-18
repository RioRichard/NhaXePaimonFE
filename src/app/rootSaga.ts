import managerSaga from "../Feature/Manager/managerSaga";
import baseSaga from "../Feature/Base/BaseSaga";
import staffSaga from "../Feature/Staff/StaffSaga";
import routesSaga from "../Feature/Routes/RoutesSaga";
import { all } from 'redux-saga/effects';
export default function* rootSaga() {
    yield all([
        managerSaga(),
        baseSaga(),
        staffSaga(),
        routesSaga(),
    ]);
}
