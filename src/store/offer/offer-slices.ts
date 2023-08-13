import { createSlice } from '@reduxjs/toolkit';
import { TOffer } from '../../types/offers.ts';
import { fetchOffer } from '../api-actions/offer-action.ts';

type TOfferState = {
  offer: TOffer | null;
  isLoading: boolean;
  hasError: boolean;
}

const initialState: TOfferState = {
  offer: null,
  isLoading: false,
  hasError: false
};

const offerSlices = createSlice({
  name: 'offer',
  initialState,
  reducers: {
    dropOffer(state) {
      state.offer = null;
      state.hasError = false;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffer.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchOffer.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  }
});

export default offerSlices.reducer;

export const { dropOffer } = offerSlices.actions;

