import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { IParams, Response, ResponseList } from '../../model';
import { Manager, ManagerState } from './types';

// Define the initial state using that type
const initialState: ManagerState = {
    status: 'idle',
    listManagers: [],
    pagination: {
        _page: 1,
        _limit: 5,
        _total: 5
    },
    error: undefined,
    success: undefined
};

const managerSlice = createSlice({
    name: 'manager',
    initialState,
    reducers: {
        // fetch list
        fetchManagers: (state, action: PayloadAction<IParams>) => {
            state.status = 'loading';
            state.error = undefined;
            state.success = undefined;
        },
        fetchManagersSuccess: (state, action: PayloadAction<ResponseList<Manager>>) => {
            state.status = 'success';
            state.error = undefined;
            state.success = undefined;
            state.listManagers = action.payload.data;
            state.pagination = action.payload.pagination;
        },
        fetchManagersFailed: (state, action: PayloadAction<string>) => {
            state.status = 'error';
            state.error = action.payload;
            state.success = undefined;
        },
    }
});

export const managerActions = managerSlice.actions;

// Selectors
export const selectManagersList = (state: RootState) => state.manager.listManagers;
export const selectManagerError = (state: RootState) => state.manager.error;
export const selectManagerStatus = (state: RootState) => state.manager.status;
export const selectManagersuccess = (state: RootState) => state.manager.success;

const managerReducer = managerSlice.reducer;
export default managerReducer;
