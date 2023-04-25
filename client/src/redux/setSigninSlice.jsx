import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    opensi: false,
};

const signin = createSlice({
    name: 'signin',
    initialState,
    reducers: {
        openSignin: (state, action) => {
            state.opensi = true;
        },
        closeSignin: (state) => {
            state.opensi = false;
        }
    }
});

export const { openSignin, closeSignin } = signin.actions;

export default signin.reducer;