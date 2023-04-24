import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: false,
};

const snackbar = createSlice({
    name: 'snackbar',
    initialState,
    reducers: {
        openSignin: (state, action) => {
            state.open = true;
        },
        closeSignin: (state) => {
            state.open = false;
        }
    }
});

export const { openSignin, closeSignin } = snackbar.actions;

export default snackbar.reducer;