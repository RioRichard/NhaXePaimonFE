import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { User } from '../User/types';
import { Response } from '../../model';
import { ResponseAuth } from './types';

export interface LoginPayload {
    username: string;
    password: string;
}

export interface AuthState {
    isLoggedIn: boolean;
    logging?: boolean;
    currentUser?: User;
    error?: string;
    success?: string;
}

const initialState: AuthState = {
    isLoggedIn: false,
    logging: false,
    currentUser: undefined,
    error: undefined,
    success: undefined
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<LoginPayload>) {
            state.logging = true;
            state.error = undefined;
            state.success = undefined;
        },
        adminLogin(state, action: PayloadAction<LoginPayload>) {
            state.logging = true;
            state.error = undefined;
            state.success = undefined;
        },
        loginSuccess(state, action: PayloadAction<ResponseAuth>) {
            state.isLoggedIn = true;
            state.logging = false;
            state.error = undefined;
            state.success = undefined;
            // state.currentUser = action.payload.user;
        },
        loginFailed(state, action: PayloadAction<string>) {
            state.logging = false;
            state.error = action.payload;
            state.success = undefined;
        },
        adminLogout(state) {
            state.isLoggedIn = false;
            state.currentUser = undefined;
            state.success = undefined;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.currentUser = undefined;
            state.success = undefined;
        },

        register(state, action: PayloadAction<User>) {
            state.logging = true;
            state.error = undefined;
            state.success = undefined;
        },
        registerSuccess(state, action: PayloadAction<Response<User>>) {
            state.logging = false;
            state.error = undefined;
            state.success = action.payload.message;
        },
        registerFailed(state, action: PayloadAction<string>) {
            state.logging = false;
            state.error = action.payload;
            state.success = undefined;
        },

        setLogged(state, action: PayloadAction<boolean>) {
            state.isLoggedIn = action.payload;
            state.logging = false;
        },

        setLoading(state) {
            state.isLoggedIn = false;
            state.logging = true;
        },

        setMe(state, action: PayloadAction<User>) {
            state.currentUser = action.payload;
        }
    }
});

// Actions
export const authActions = authSlice.actions;

// Selectors
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectIsLogging = (state: RootState) => state.auth.logging;
export const selectIsError = (state: RootState) => state.auth.error;
export const selectIsUser = (state: RootState) => state.auth.currentUser;
export const selectIsSuccess = (state: RootState) => state.auth.success;

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
