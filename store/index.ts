import { configureStore } from '@reduxjs/toolkit';
import errorReducer from './error';

export const store = configureStore({
  reducer: {
    error: errorReducer,
  },
  devTools: process.env.NODE_ENV != 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
