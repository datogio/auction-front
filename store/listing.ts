import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from '.';
import * as api from '../services/api';
import * as promptActions from '../store/prompt';

export const setAllListings = createAsyncThunk(
  'listing/setAllListings',
  async ({}, { dispatch }) => {
    api
      .getAllListings()
      .then((listings) => dispatch(set(listings)))
      .catch(() =>
        dispatch(
          promptActions.add({
            id: Math.random(),
            type: 'error',
            message: 'Error retrieving listings',
          })
        )
      );
  }
);

export const createListing = createAsyncThunk(
  'listing/createListing',
  async (
    {
      title,
      description,
      startingPrice,
      categoryId,
      owner,
      listingImage,
    }: {
      title: string;
      description: string;
      startingPrice: string;
      categoryId: string;
      owner: user.Model;
      listingImage: File;
    },
    { dispatch }
  ) => {
    api
      .createListing(
        title,
        description,
        startingPrice,
        categoryId,
        owner,
        listingImage
      )
      .then((listing) => {
        console.log(listing);
      })
      .catch(() =>
        dispatch(
          promptActions.add({
            id: Math.random(),
            type: 'error',
            message: 'Error creating listing',
          })
        )
      );
  }
);

export const selectListings = createSelector(
  ({ listings: state }: RootState) => state.listings,
  (listings) => listings
);

interface IState {
  listings: listing.Model[];
}

const initialState: IState = {
  listings: [],
};

export const listingSlice = createSlice({
  name: 'listing',
  initialState,
  reducers: {
    set: (state: IState, action: PayloadAction<listing.Model[]>) => {
      state.listings = action.payload;
    },
  },
});

export const { set } = listingSlice.actions;

export default listingSlice.reducer;
