import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import {combineReducers  } from "@reduxjs/toolkit";
import UserReducer from '../Feature/User/userSlice';


const rootReducer  = combineReducers({
  user:UserReducer
})
const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
    reducer: rootReducer,
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
