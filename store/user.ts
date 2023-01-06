import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import * as errorActions from './error';
import * as strapi from '../services/strapi';
import * as api from '../services/api';
import { RootState } from '.';

export const signOut = createAsyncThunk(
  'user/signOut',
  async ({}, { dispatch }) => {
    strapi
      .signOut()
      .then(() => dispatch(errorActions.set(null)))
      .catch((err) => dispatch(errorActions.set(err)));
  }
);

export const signUp = createAsyncThunk(
  'user/signUp',
  async (
    {
      firstName,
      lastName,
      email,
      password,
    }: { firstName: string; lastName: string; email: string; password: string },
    { dispatch }
  ) => {
    api
      .signUp(firstName, lastName, email, password)
      .then((user) => {
        dispatch(set(user));
      })
      .catch((err) => console.log(err.message));
  }
);

export const signIn = createAsyncThunk(
  'user/signIn',
  async (
    { identifier, password }: { identifier: string; password: string },
    { dispatch }
  ) => {
    strapi
      .signIn(identifier, password)
      .then(() => dispatch(errorActions.set(null)))
      .catch((err) => dispatch(errorActions.set(err)));
  }
);

export const selectUser = createSelector(
  ({ user: state }: RootState) => state.user,
  (user) => user
);

interface IState {
  user: user.Model | null;
}

const initialState: IState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    set: (state: IState, action: PayloadAction<user.Model>) => {
      state.user = action.payload;
    },
  },
});

export const { set } = userSlice.actions;

export default userSlice.reducer;
