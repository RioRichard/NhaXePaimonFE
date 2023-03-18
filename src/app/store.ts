import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import managerReducer from '../Feature/Manager/managerSlice';
import basesReducer from '../Feature/Base/BaseSlice';
import staffReducer from '../Feature/Staff/StaffSlice';
import routesReducer from '../Feature/Routes/RoutesSlice';
import rootSaga from './rootSaga';
import createSagaMiddleware from 'redux-saga';

const rootReducer = combineReducers({
    manager: managerReducer,
    bases: basesReducer,
    staff: staffReducer,
    routes: routesReducer,
});

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
