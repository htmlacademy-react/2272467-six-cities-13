import { createReducer } from '@reduxjs/toolkit';
import { getNearOffers, getOffers, setCurrentCity } from './action.ts';
import { cities } from '../constants/city.ts';
import { TCity, TOffer } from '../types/offers.ts';
import { offers } from '../mocks/offers.ts';
import { nearOffers } from '../mocks/near-offers.ts';

const initialState: {
  currentCity: TCity;
  offers: TOffer[];
  nearOffers: TOffer[];
} = {
  currentCity: cities[0],
  offers: [],
  nearOffers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(getOffers, (state) => {
      state.offers = offers;
    })
    .addCase(getNearOffers, (state) => {
      state.nearOffers = nearOffers;
    });
});

export { reducer };
