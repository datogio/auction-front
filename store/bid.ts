import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as api from '../services/api';
import * as promptActions from '../store/prompt';

export const createBid = createAsyncThunk(
  'bid/createBid',
  async (
    {
      amount,
      bidder,
      listingId,
    }: { amount: number; bidder: user.Model; listingId: string },
    { dispatch }
  ) => {
    api
      .createBid(amount, bidder, listingId)
      .then((bid) => {
        dispatch(add(bid));
        dispatch(
          promptActions.add({
            id: Math.random(),
            type: 'notification',
            message: 'Bid successfuly added',
          })
        );
      })
      .catch((err) =>
        dispatch(
          promptActions.add({
            id: Math.random(),
            type: 'error',
            message: 'Error creating bid',
          })
        )
      );
  }
);

export const setAllBids = createAsyncThunk(
  'bid/setAddBids',
  async ({}, { dispatch }) => {
    api
      .getAllBids()
      .then((bids) => {
        dispatch(set(bids));
      })
      .catch((err) => console.log(err.message));
  }
);

interface IState {
  bids: bid.Model[];
}

const initialState: IState = {
  bids: [],
};

export const bidSlice = createSlice({
  name: 'bid',
  initialState,
  reducers: {
    set: (state: IState, action: PayloadAction<bid.Model[]>) => {
      state.bids = action.payload;
    },
    add: (state: IState, action: PayloadAction<bid.Model>) => {
      state.bids = [action.payload, ...state.bids];
    },
  },
});

export const { set, add } = bidSlice.actions;

export default bidSlice.reducer;
