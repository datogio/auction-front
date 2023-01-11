import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

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
      startingPrice: number;
      categoryId: string;
      owner: string;
      listingImage: File;
    },
    { dispatch }
  ) => {
    console.log(title);
    console.log(description);
    console.log(startingPrice);
    console.log(categoryId);
    console.log(owner);
    console.log(listingImage);
  }
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
