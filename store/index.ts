import { configureStore } from '@reduxjs/toolkit';
import errorReducer from './error';
import projectReducer from './project';

export const store = configureStore({
  reducer: {
    error: errorReducer,
    projects: projectReducer,
  },
  devTools: process.env.NODE_ENV != 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
