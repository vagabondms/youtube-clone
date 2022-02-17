import { configureStore } from '@reduxjs/toolkit';
import queryReducer from './querySlice';
import videoReducer from './videoSlice';

export const store = configureStore({
  reducer: {
    query: queryReducer,
    video: videoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
