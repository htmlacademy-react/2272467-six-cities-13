import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TOffer } from '../../types/offers.ts';

type TOffersState = {
  offers: TOffer[];
  isLoading: boolean;
}

const initialState: TOffersState = {
  offers: [],
  isLoading: false
};

const offersSlices = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    setOffers(state, action: PayloadAction<TOffer[]>) {
      state.offers = action.payload;
    },
    setOffersLoadingStatus(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    }
  }
});

export default offersSlices.reducer;

export const { setOffers, setOffersLoadingStatus } = offersSlices.actions;

