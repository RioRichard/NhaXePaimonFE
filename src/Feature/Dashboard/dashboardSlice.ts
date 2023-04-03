import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Order } from '../Order/types';
import { Bus } from '../Bus/types';
import { Routes } from '../Routes/types';
import { User } from '../User/types';



export interface DashboardState {
    loading: boolean;
    newOrderList: Order[];
    newBusList: Bus[];
    newRouteList: Routes[];
    newUserList: User[];
}

const initialState: DashboardState = {
    loading: false,
    newOrderList: [],
    newBusList: [],
    newRouteList: [],
    newUserList: [],
};

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: initialState,
    reducers: {
        fetchData(state) {
            state.loading = true;
        },
        fetchDataSuccess(state) {
            state.loading = false;
        },
        fetchDataFailed(state) {
            state.loading = false;
        },
        setNewOrderList(state, action: PayloadAction<Order[]>) {
            state.newOrderList = action.payload;
        },
        setNewBusList(state, action: PayloadAction<Bus[]>) {
            state.newBusList = action.payload;
            console.log("action.payload", action.payload)
        },
        setNewRouteList(state, action: PayloadAction<Routes[]>) {
            state.newRouteList = action.payload;
        },
        setNewUserList(state, action: PayloadAction<User[]>) {
            state.newUserList = action.payload;
            console.log("action.payload", action.payload)
        },
    }
});

// Actions
export const dashboardActions = dashboardSlice.actions;

// Selector
export const selectNewOrderList = (state: RootState) => state.dashboard.newOrderList;
export const selectNewBusList = (state: RootState) => state.dashboard.newBusList;
export const selectNewRouteList = (state: RootState) => state.dashboard.newRouteList;
export const selectNewUserList = (state: RootState) => state.dashboard.newUserList;
// Reducers
const dashboardReducer = dashboardSlice.reducer;
export default dashboardReducer;
 