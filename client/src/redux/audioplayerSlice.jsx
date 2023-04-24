import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openaudio: false,
    episode: null,
    podid: null,
    currenttime: 0,
    index: 0
};

const audioplayer = createSlice({
    name: 'audioplayer',
    initialState,
    reducers: {
        openAudioPlayer: (state, action) => {
            state.openaudio = true;
            state.episode = action.payload.episode;
            state.podid = action.payload.podid;
            state.currenttime = action.payload.currenttime;
            state.index = action.payload.index;
        },
        closeAudioPlayer: (state) => {
            state.openAudioplayer = false;
        },
        setCurrentTime: (state, action) => {
            state.currenttime = action.payload.currenttime;
        }
    }
});

export const { openAudioPlayer, closeAudioPlayer,setCurrentTime } = audioplayer.actions;

export default audioplayer.reducer;