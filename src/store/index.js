
import {configureStore, createSlice} from '@reduxjs/toolkit';
require('redux');
const initState = { counter: 0, showCounter: true};

const counterSlice = createSlice({
    name: 'counter',
    initialState:initState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        toggle(state) {
            state.showCounter = !state.showCounter
        }
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loggedIn: false,
        toggle: false
    },
    reducers: {
        toggle(state){
            state.toggle = !state.toggle;
        },
        login(state) {
            state.loggedIn = true;
        },
        logout(state) {
            state.loggedIn = false;
        }
    }
});

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});

export const counterActions = counterSlice.actions
export const authActions = authSlice.actions
export default store