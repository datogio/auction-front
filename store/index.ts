import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import errorReducer from './error';

export const store = configureStore({
  reducer: {
    user: userReducer,
    error: errorReducer,
  },
  devTools: process.env.NODE_ENV != 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
