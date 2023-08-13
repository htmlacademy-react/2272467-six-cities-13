import { createSlice } from '@reduxjs/toolkit';
import { TOffer } from '../../types/offers.ts';
import { fetchOffer } from '../api-actions/offer-action.ts';

type TOfferState = {
  offer: TOffer | null;
  isLoading: boolean;
}

const initialState: TOfferState = {
  offer: null,
  isLoading: false
};

const offerSlices = createSlice({
  name: 'offer',
  initialState,
  reducers: {
    dropOffer(state) {
      state.offer = null;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isLoading = false;
      });
  }
});

export default offerSlices.reducer;

export const { dropOffer } = offerSlices.actions;

