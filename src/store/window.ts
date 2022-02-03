import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Size = 'LARGE' | 'MEDIUM' | 'SMALL';

export interface WindowState {
  size: Size;
  isSidebarOpen: boolean;
  isSidebarMiniOpen: boolean;
}

const initialState: WindowState = {
  size: 'LARGE',
  isSidebarOpen: true,
  isSidebarMiniOpen: false,
};

export const windowSlice = createSlice({
  name: 'window',
  initialState,
  reducers: {
    updateSize: (state, { payload }: PayloadAction<Size>) => {
      state.size = payload;
    },
    updateIsSidebarOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.isSidebarOpen = payload;
    },
    updateIsSidebarMiniOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.isSidebarMiniOpen = payload;
    },
  },
});

export const { updateSize, updateIsSidebarOpen, updateIsSidebarMiniOpen } =
  windowSlice.actions;

export default windowSlice.reducer;
