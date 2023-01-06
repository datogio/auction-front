import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import * as api from '../services/api';
import { RootState } from '.';
import { SetStateAction } from 'react';

export const signOut = createAsyncThunk(
  'user/signOut',
  async ({}, { dispatch }) => {
    api
      .signOut()
      .then(() => dispatch(set(null)))
      .catch((err) => console.log(err.message));
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
      setInputs,
    }: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      setInputs: (
        value: SetStateAction<{
          firstName: string;
          lastName: string;
          email: string;
          confirmEmail: string;
          password: string;
          confirmPassword: string;
        }>
      ) => void;
    },
    { dispatch }
  ) => {
    api
      .signUp(firstName, lastName, email, password)
      .then((user) => {
        dispatch(set(user));
        setInputs({
          firstName: '',
          lastName: '',
          email: '',
          confirmEmail: '',
          password: '',
          confirmPassword: '',
        });
      })
      .catch((err) => console.log(err.message));
  }
);

export const signIn = createAsyncThunk(
  'user/signIn',
  async (
    {
      email,
      password,
      setInputs,
    }: {
      email: string;
      password: string;
      setInputs: (
        value: SetStateAction<{
          email: string;
          password: string;
        }>
      ) => void;
    },
    { dispatch }
  ) => {
    api
      .signIn(email, password)
      .then((user) => {
        dispatch(set(user));
        setInputs({ email: '', password: '' });
      })
      .catch((err) => console.log(err.message));
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
    set: (state: IState, action: PayloadAction<user.Model | null>) => {
      state.user = action.payload;
    },
  },
});

export const { set } = userSlice.actions;

export default userSlice.reducer;
