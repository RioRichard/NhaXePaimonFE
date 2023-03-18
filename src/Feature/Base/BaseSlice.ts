import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { IParams, Response, ResponseList } from '../../model';
import { Base, BaseState } from './types';

// Define the initial state using that type
const initialState: BaseState = {
    status: 'idle',
    listBases: [],
    pagination: {
        _page: 1,
        _limit: 5,
        _total: 5
    },
    error: undefined,
    success: undefined
};

const baseSlice = createSlice({
    name: 'base',
    initialState,
    reducers: {
        // fetch list
        fetchBases: (state, action: PayloadAction<IParams>) => {
            state.status = 'loading';
            state.error = undefined;
            state.success = undefined;
        },
        fetchBasesSuccess: (state, action: PayloadAction<ResponseList<Base>>) => {
            state.status = 'success';
            state.error = undefined;
            state.success = undefined;
            state.listBases = action.payload.data;
            state.pagination = action.payload.pagination;
        },
        fetchBaessFailed: (state, action: PayloadAction<string>) => {
            state.status = 'error';
            state.error = action.payload;
            state.success = undefined;
        },
        createBases: (state, action: PayloadAction<Base>) => {
            state.status = 'loading';
            state.error = undefined;
            state.success = undefined;
        },
        createBasesSuccess: (state, action: PayloadAction<Response<Base>>) => {
            state.status = 'success';
            state.error = undefined;
            state.success = action.payload.message;
        },
        createBasesFailed: (state, action: PayloadAction<any>) => {
            state.status = 'error';
            state.error = action.payload.message;
            state.success = undefined;
        },

        // update
        updateBases: (state, action: PayloadAction<Base>) => {
            state.status = 'loading';
            state.error = undefined;
            state.success = undefined;
        },
        updateBasesSuccess: (state, action: PayloadAction<Response<Base>>) => {
            state.status = 'success';
            state.error = undefined;
            state.success = action.payload.message;
        },
        updateBasesFailed: (state, action: PayloadAction<any>) => {
            state.status = 'error';
            state.error = action.payload.message;
            state.success = undefined;
        }
    }
});

export const baseActions = baseSlice.actions;

// Selectors
export const selectBasesList = (state: RootState) => state.bases.listBases;
export const selectBasesError = (state: RootState) => state.bases.error;
export const selectBasesStatus = (state: RootState) => state.bases.status;
export const selectBasessuccess = (state: RootState) => state.bases.success;

const basesReducer = baseSlice.reducer;
export default basesReducer;
