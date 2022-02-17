import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VideoInfo } from '@src/App';

export interface VideoState {
  videos: VideoInfo[];
}

const initialState: VideoState = {
  videos: [],
};

export const querySlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    updateVideo: (state, { payload }: PayloadAction<VideoInfo[]>) => {
      state.videos = payload;
    },
    resetVideo: (state) => {
      state.videos = [];
    },
  },
});

export const { updateVideo, resetVideo } = querySlice.actions;

export default querySlice.reducer;
