import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openaudio: false,
    episode: null,
    podid: null,
};

const audioplayer = createSlice({
    name: 'audioplayer',
    initialState,
    reducers: {
        openAudioPlayer: (state, action) => {
            state.openaudio = true;
            state.episode = action.payload.episode;
            state.podid = action.payload.podid;
        },
        closeAudioPlayer: (state) => {
            state.openAudioplayer = false;
        }
    }
});

export const { openAudioPlayer, closeAudioPlayer } = audioplayer.actions;

export default audioplayer.reducer;