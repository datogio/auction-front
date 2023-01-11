import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import promptReducer from './prompt';
import categoryReducer from './category';
import listingReducer from './listing';

export const store = configureStore({
  reducer: {
    user: userReducer,
    prompts: promptReducer,
    categories: categoryReducer,
    listings: listingReducer,
  },
  devTools: process.env.NODE_ENV != 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
