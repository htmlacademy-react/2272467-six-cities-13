import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TOffer } from '../../types/offers.ts';
import { fetchOffer } from '../api-actions/offer-action.ts';
import { NameSpace } from '../../constants/name-space.ts';

type TOfferState = {
  offer: TOffer | null;
  isLoading: boolean;
  hasError: boolean;
  selectedOffer: TOffer['id'] | null;
}

const initialState: TOfferState = {
  offer: null,
  isLoading: false,
  hasError: false,
  selectedOffer: null
};

const offerSlices = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    addSelectedOffer(state, action: PayloadAction<TOffer['id'] | null>) {
      state.selectedOffer = action.payload;
    },
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

export const { addSelectedOffer, dropOffer } = offerSlices.actions;

