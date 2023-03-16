import { all } from "redux-saga/effects";
import userSaga from "../Feature/User/userSaga";
export default function* rootSaga(){
    yield all([
        userSaga(),
    ])
}