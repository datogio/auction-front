import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { SetStateAction } from 'react';
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
      setInputs,
      setImages,
      deactivateOverlay,
    }: {
      title: string;
      description: string;
      startingPrice: string;
      categoryId: string;
      owner: user.Model;
      listingImage: File;
      setInputs: (
        value: SetStateAction<{
          listingTitle: string;
          listingDescription: string;
          startingPrice: string;
          category: string;
        }>
      ) => void;
      setImages: (value: SetStateAction<FileList | null | undefined>) => void;
      deactivateOverlay: () => void;
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
        deactivateOverlay();
        dispatch(add(listing));
        dispatch(
          promptActions.add({
            id: Math.random(),
            type: 'notification',
            message: 'New listing submitted',
          })
        );
        setInputs({
          listingTitle: '',
          listingDescription: '',
          startingPrice: '',
          category: '',
        });
        setImages(null);
      })
      .catch((err) => {
        console.log(err);
        dispatch(
          promptActions.add({
            id: Math.random(),
            type: 'error',
            message: 'Error creating listing',
          })
        );
      });
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
    add: (state: IState, action: PayloadAction<listing.Model>) => {
      state.listings = [...state.listings, action.payload];
    },
  },
});

export const { set, add } = listingSlice.actions;

export default listingSlice.reducer;
