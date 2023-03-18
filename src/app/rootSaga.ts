import managerSaga from "../Feature/Manager/managerSaga";
import baseSaga from "../Feature/Base/BaseSaga";
import { all } from 'redux-saga/effects';
export default function* rootSaga() {
    yield all([
        managerSaga(),
        baseSaga(),
    ]);
}
