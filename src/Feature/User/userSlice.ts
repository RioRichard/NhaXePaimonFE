import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { IParams, Response, ResponseList } from '../../model';
import { User, UserState } from './types';
import React from "react";
// Define the initial state using that type
const initialState: UserState = {
    status: 'idle',
    listUser: [],
    pagination: {
        _page: 1,
        _limit: 5,
        _total: 5
    },
    error: undefined,
    success: undefined
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // fetch list
        fetchUser: (state, action: PayloadAction<IParams>) => {
            state.status = 'loading';
            state.error = undefined;
            state.success = undefined;
        },
        fetchUserSuccess: (state, action: PayloadAction<ResponseList<User>>) => {
            state.status = 'success';
            state.error = undefined;
            state.success = undefined;
            state.listUser = action.payload.data;
            state.pagination = action.payload.pagination;
        },
        fetchUserFailed: (state, action: PayloadAction<any>) => {
            state.status = 'error';
            state.error = action.payload.message;
            state.success = undefined;
        },

        // create
        createUser: (state, action: PayloadAction<User>) => {
            state.status = 'loading';
            state.error = undefined;
            state.success = undefined;
        },
        createUserSuccess: (state, action: PayloadAction<Response<User>>) => {
            state.status = 'success';
            state.error = undefined;
            state.success = action.payload.message;
        },
        createUserFailed: (state, action: PayloadAction<any>) => {
            state.status = 'error';
            state.error = action.payload.message;
            state.success = undefined;
        },

        // update
        updateUser: (state, action: PayloadAction<User>) => {
            state.status = 'loading';
            state.error = undefined;
            state.success = undefined;
        },
        updateUserSuccess: (state, action: PayloadAction<Response<User>>) => {
            state.status = 'success';
            state.error = undefined;
            state.success = action.payload.message;
        },
        updateUserFailed: (state, action: PayloadAction<any>) => {
            state.status = 'error';
            state.error = action.payload.message;
            state.success = undefined;
        }
    }
});

export const userActions = userSlice.actions;

// Selectors
export const selectUserList = (state: RootState) => state.user.listUser;
export const selectUserPagination = (state: RootState) => state.user.pagination;
export const selectUserError = (state: RootState) => state.user.error;
export const selectUserStatus = (state: RootState) => state.user.status;
export const selectUserSuccess = (state: RootState) => state.user.success;

const UserReducer = userSlice.reducer;
export default UserReducer;
