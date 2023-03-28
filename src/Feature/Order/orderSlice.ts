import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { IParams, Response, ResponseList } from '../../model';
import { Order, OrderState } from './types';

// Define the initial state using that type
const initialState: OrderState = {
    status: 'idle',
    listOrders: [],
    pagination: {
        _page: 1,
        _size: 5,
        _total: 5
    },
    error: undefined,
    success: undefined
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        // fetch list
        fetchOrders: (state, action: PayloadAction<IParams>) => {
            state.status = 'loading';
            state.error = undefined;
            state.success = undefined;
        },
        fetchOrdersSuccess: (state, action: PayloadAction<ResponseList<Order>>) => {
            state.status = 'success';
            state.error = undefined;
            state.success = undefined;
            state.listOrders = action.payload.data;
            state.pagination = action.payload.pagination;
        },
        fetchOrdersFailed: (state, action: PayloadAction<string>) => {
            state.status = 'error';
            state.error = action.payload;
            state.success = undefined;
        },
        // upload list
        updateOrder: (state, action: PayloadAction<Order>) => {
            state.status = 'loading';
            state.error = undefined;
            state.success = undefined;
        },
        updateOrderSuccess: (state, action: PayloadAction<Response<Order>>) => {
            state.status = 'success';
            state.error = undefined;
            state.success = action.payload.message;
        },
        updateOrderFailed: (state, action: PayloadAction<string>) => {
            state.status = 'error';
            state.error = action.payload;
            state.success = undefined;
        },
        // create list
        createOrder: (state, action: PayloadAction<Order>) => {
            state.status = 'loading';
            state.error = undefined;
            state.success = undefined;
        },
        createOrderSuccess: (state, action: PayloadAction<Response<Order>>) => {
            state.status = 'success';
            state.error = undefined;
            state.success = action.payload.message;
        },
        createOrderFailed: (state, action: PayloadAction<string>) => {
            state.status = 'error';
            state.error = action.payload;
            state.success = undefined;
        }
    }
});

export const orderActions = orderSlice.actions;

// Selectors
export const selectOrdersList = (state: RootState) => state.order.listOrders;
export const selectOrderError = (state: RootState) => state.order.error;
export const selectOrderStatus = (state: RootState) => state.order.status;
export const selectOrdersuccess = (state: RootState) => state.order.success;

const orderReducer = orderSlice.reducer;
export default orderReducer;
