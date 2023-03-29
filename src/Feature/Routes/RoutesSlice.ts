import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { IParams, Response, ResponseList } from '../../model';
import { Routes, RoutesState } from './types';

// Define the initial state using that type
const initialState: RoutesState = {
    status: 'idle',
    listRoutes: [],
    pagination: {
        _page: 1,
        _size: 5,
        _total: 5
    },
    error: undefined,
    success: undefined
};

const routesSlice = createSlice({
    name: 'route',
    initialState,
    reducers: {
        // fetch list
        fetchRoutes: (state, action: PayloadAction<IParams>) => {
            state.status = 'loading';
            state.error = undefined;
            state.success = undefined;
        },
        fetchRoutesSuccess: (state, action: PayloadAction<ResponseList<Routes>>) => {
            state.status = 'success';
            state.error = undefined;
            state.success = undefined;
            state.listRoutes = action.payload.data;
            state.pagination = action.payload.pagination;
        },
        fetchRoutesFailed: (state, action: PayloadAction<string>) => {
            state.status = 'error';
            state.error = action.payload;
            state.success = undefined;
        },
        createRoutes: (state, action: PayloadAction<Routes>) => {
            state.status = 'loading';
            state.error = undefined;
            state.success = undefined;
        },
        createRoutesSuccess: (state, action: PayloadAction<Response<Routes>>) => {
            state.status = 'success';
            state.error = undefined;
            state.success = action.payload.message;
        },
        createRoutesFailed: (state, action: PayloadAction<any>) => {
            state.status = 'error';
            state.error = action.payload.message;
            state.success = undefined;
        },

        // update
        updateRoutes: (state, action: PayloadAction<Routes>) => {
            state.status = 'loading';
            state.error = undefined;
            state.success = undefined;
        },
        updateRoutesSuccess: (state, action: PayloadAction<Response<Routes>>) => {
            state.status = 'success';
            state.error = undefined;
            state.success = action.payload.message;
        },
        updateRoutesFailed: (state, action: PayloadAction<any>) => {
            state.status = 'error';
            state.error = action.payload.message;
            state.success = undefined;
        }
    }
});

export const routesActions = routesSlice.actions;

// Selectors
export const selectRoutesList = (state: RootState) => state.routes.listRoutes;
export const selectRoutesError = (state: RootState) => state.routes.error;
export const selectRoutesStatus = (state: RootState) => state.routes.status;
export const selectRoutessuccess = (state: RootState) => state.routes.success;

const routesReducer = routesSlice.reducer;
export default routesReducer;
