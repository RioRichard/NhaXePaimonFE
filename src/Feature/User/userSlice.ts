import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { IParams, Response, ResponseList } from '../../model';
import { User, UserState } from './types';

// Define the initial state using that type
const initialState: UserState = {
    status: 'idle',
    listUsers: [],
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
        fetchUsers: (state, action: PayloadAction<IParams>) => {
            state.status = 'loading';
            state.error = undefined;
            state.success = undefined;
        },
        fetchUsersSuccess: (state, action: PayloadAction<ResponseList<User>>) => {
            state.status = 'success';
            state.error = undefined;
            state.success = undefined;
            state.listUsers = action.payload.data;
            state.pagination = action.payload.pagination;
        },
        fetchUsersFailed: (state, action: PayloadAction<string>) => {
            state.status = 'error';
            state.error = action.payload;
            state.success = undefined;
        },
        // upload list
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
        updateUserFailed: (state, action: PayloadAction<string>) => {
            state.status = 'error';
            state.error = action.payload;
            state.success = undefined;
        },
        // create list
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
        createUserFailed: (state, action: PayloadAction<string>) => {
            state.status = 'error';
            state.error = action.payload;
            state.success = undefined;
        }
    }
});

export const userActions = userSlice.actions;

// Selectors
export const selectUsersList = (state: RootState) => state.user.listUsers;
export const selectUserError = (state: RootState) => state.user.error;
export const selectUserStatus = (state: RootState) => state.user.status;
export const selectUsersuccess = (state: RootState) => state.user.success;

const userReducer = userSlice.reducer;
export default userReducer;
