import managerSaga from "../Feature/Manager/managerSaga";
import { all } from 'redux-saga/effects';
export default function* rootSaga() {
    yield all([
        managerSaga(),
    ]);
}
