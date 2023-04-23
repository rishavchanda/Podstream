import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openvideo: false,
    videoepisode: null,
    videopodid: null,
};

const videoplayer = createSlice({
    name: 'videoplayer',
    initialState,
    reducers: {
        openVideoPlayer: (state, action) => {
            state.openvideo = true;
            state.videoepisode = action.payload.videoepisode;
            state.videopodid = action.payload.videopodid;
        },
        closeVideoPlayer: (state) => {
            state.openvideo = false;
        }
    }
});

export const { openVideoPlayer, closeVideoPlayer } = videoplayer.actions;

export default videoplayer.reducer;