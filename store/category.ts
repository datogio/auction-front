import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from '.';
import * as api from '../services/api';

export const setAllCategories = createAsyncThunk(
  'category/setAll',
  async ({}, { dispatch }) => {
    api
      .getAllCategories()
      .then((categories) => {
        dispatch(set(categories));
      })
      .catch((err) => console.log(err.message));
  }
);

export const selectAllCategories = createSelector(
  ({ categories: state }: RootState) => state.categories,
  (categories) => categories
);

interface IState {
  categories: category.Model[];
}

const initialState: IState = {
  categories: [],
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    set: (state: IState, action: PayloadAction<category.Model[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { set } = categorySlice.actions;

export default categorySlice.reducer;
