import { createReducer } from '@reduxjs/toolkit';
import { getNearOffers, getOffers, getReview, setCurrentCity } from './action.ts';
import { City } from '../constants/city.ts';
import { TOffer } from '../types/offers.ts';
import { offers } from '../mocks/offers.ts';
import { nearOffers } from '../mocks/near-offers.ts';
import { TReview } from '../types/review.ts';
import { reviews } from '../mocks/reviews.ts';


const initialState: {
  currentCity: City;
  offers: TOffer[];
  nearOffers: TOffer[];
  reviews: TReview[];
} = {
  currentCity: City.Paris,
  offers: [],
  nearOffers: [],
  reviews: [],
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
    })
    .addCase(getReview, (state) => {
      state.reviews = reviews;
    });
});

export { reducer };
