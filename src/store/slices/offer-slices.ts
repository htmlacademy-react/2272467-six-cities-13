import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TOffer } from '../../types/offers.ts';

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
    setOffer(state, action: PayloadAction<TOffer>) {
      state.offer = action.payload;
    },
    setOfferLoadingStatus(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    dropOffer(state) {
      state.offer = null;
    }
  }
});

export default offerSlices.reducer;

export const { setOffer, setOfferLoadingStatus, dropOffer } = offerSlices.actions;

