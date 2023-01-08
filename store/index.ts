import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import promptReducer from './prompt';
import categoryReducer from './category';

export const store = configureStore({
  reducer: {
    user: userReducer,
    prompts: promptReducer,
    categories: categoryReducer,
  },
  devTools: process.env.NODE_ENV != 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
