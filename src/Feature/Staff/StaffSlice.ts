import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { IParams, Response, ResponseList } from '../../model';
import { Staff, StaffState } from './types';

// Define the initial state using that type
const initialState: StaffState = {
    status: 'idle',
    listStaff: [],
    pagination: {
        _page: 1,
        _limit: 5,
        _total: 5
    },
    error: undefined,
    success: undefined
};

const staffSlice = createSlice({
    name: 'staff',
    initialState,
    reducers: {
        // fetch list
        fetchStaff: (state, action: PayloadAction<IParams>) => {
            state.status = 'loading';
            state.error = undefined;
            state.success = undefined;
        },
        fetchStaffSuccess: (state, action: PayloadAction<ResponseList<Staff>>) => {
            state.status = 'success';
            state.error = undefined;
            state.success = undefined;
            state.listStaff = action.payload.data;
            state.pagination = action.payload.pagination;
        },
        fetchStaffFailed: (state, action: PayloadAction<string>) => {
            state.status = 'error';
            state.error = action.payload;
            state.success = undefined;
        },
        createStaff: (state, action: PayloadAction<Staff>) => {
            state.status = 'loading';
            state.error = undefined;
            state.success = undefined;
        },
        createStaffSuccess: (state, action: PayloadAction<Response<Staff>>) => {
            state.status = 'success';
            state.error = undefined;
            state.success = action.payload.message;
        },
        createStaffFailed: (state, action: PayloadAction<any>) => {
            state.status = 'error';
            state.error = action.payload.message;
            state.success = undefined;
        },

        // update
        updateStaff: (state, action: PayloadAction<Staff>) => {
            state.status = 'loading';
            state.error = undefined;
            state.success = undefined;
        },
        updateStaffSuccess: (state, action: PayloadAction<Response<Staff>>) => {
            state.status = 'success';
            state.error = undefined;
            state.success = action.payload.message;
        },
        updateStaffFailed: (state, action: PayloadAction<any>) => {
            state.status = 'error';
            state.error = action.payload.message;
            state.success = undefined;
        }
    }
});

export const staffActions = staffSlice.actions;

// Selectors
export const selectStaffList = (state: RootState) => state.staff.listStaff;
export const selectStaffError = (state: RootState) => state.staff.error;
export const selectStaffStatus = (state: RootState) => state.staff.status;
export const selectStaffsuccess = (state: RootState) => state.staff.success;

const staffReducer = staffSlice.reducer;
export default staffReducer;
