import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { IParams, Response, ResponseList } from '../../model';
import { Bus, Bustate } from './types';

// Define the initial state using that type
const initialState: Bustate = {
    status: 'idle',
    listBus: [],
    pagination: {
        _page: 1,
        _size: 5,
        _total: 5
    },
    error: undefined,
    success: undefined
};

const busSlice = createSlice({
    name: 'bus',
    initialState,
    reducers: {
        // fetch list
        fetchBus: (state, action: PayloadAction<IParams>) => {
            state.status = 'loading';
            state.error = undefined;
            state.success = undefined;
        },
        fetchBusSuccess: (state, action: PayloadAction<ResponseList<Bus>>) => {
            state.status = 'success';
            state.error = undefined;
            state.success = undefined;
            state.listBus = action.payload.data;
            state.pagination = action.payload.pagination;
        },
        fetchBusFailed: (state, action: PayloadAction<string>) => {
            state.status = 'error';
            state.error = action.payload;
            state.success = undefined;
        },
        createBus: (state, action: PayloadAction<Bus>) => {
            state.status = 'loading';
            state.error = undefined;
            state.success = undefined;
        },
        createBusSuccess: (state, action: PayloadAction<Response<Bus>>) => {
            state.status = 'success';
            state.error = undefined;
            state.success = action.payload.message;
        },
        createBusFailed: (state, action: PayloadAction<any>) => {
            state.status = 'error';
            state.error = action.payload.message;
            state.success = undefined;
        },

        // update
        updateBus: (state, action: PayloadAction<Bus>) => {
            state.status = 'loading';
            state.error = undefined;
            state.success = undefined;
        },
        updateBusSuccess: (state, action: PayloadAction<Response<Bus>>) => {
            state.status = 'success';
            state.error = undefined;
            state.success = action.payload.message;
        },
        updateBusFailed: (state, action: PayloadAction<any>) => {
            state.status = 'error';
            state.error = action.payload.message;
            state.success = undefined;
        }
    }
});

export const busActions = busSlice.actions;

// Selectors
export const selectBusList = (state: RootState) => state.bus.listBus;
export const selectBusError = (state: RootState) => state.bus.error;
export const selectBusStatus = (state: RootState) => state.bus.status;
export const selectBusSuccess = (state: RootState) => state.bus.success;

const busReducer = busSlice.reducer;
export default busReducer;
