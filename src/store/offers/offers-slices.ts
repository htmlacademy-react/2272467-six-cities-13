import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TOffer } from '../../types/offers.ts';
import { fetchOffers } from '../api-actions/offers-action.ts';

type TOffersState = {
  offers: TOffer[];
  isLoading: boolean;
  selectedOffer: TOffer['id'] | null;
}

const initialState: TOffersState = {
  offers: [],
  isLoading: false,
  selectedOffer: null
};

const offersSlices = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    addSelectedOffer(state, action: PayloadAction<TOffer['id'] | null>) {
      state.selectedOffer = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isLoading = false;
      });
  }
});

export default offersSlices.reducer;

export const { addSelectedOffer } = offersSlices.actions;

