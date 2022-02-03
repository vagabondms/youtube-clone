import { configureStore } from '@reduxjs/toolkit';
import windowReducer from './window';

export const store = configureStore({
  reducer: {
    window: windowReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
