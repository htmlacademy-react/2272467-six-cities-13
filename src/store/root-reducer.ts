import { combineReducers } from '@reduxjs/toolkit';
import currentCitySlices from './slices/current-city-slices.ts';
import offersSlices from './slices/offers-slices.ts';
import offerSlices from './slices/offer-slices.ts';
import favoritesOffersSlices from './slices/favorites-offers-slices.ts';
import nearOffersSlices from './slices/near-offers-slices.ts';
import reviewSlices from './slices/review-slices.ts';
import reviewFormSlices from './slices/review-form-slices.ts';
import currentSortingSlices from './slices/current-sorting-slices.ts';
import userSlices from './slices/user-slices.ts';

export const rootReducer = combineReducers({
  currentCity: currentCitySlices,
  offers: offersSlices,
  offer: offerSlices,
  favoritesOffers: favoritesOffersSlices,
  nearOffers: nearOffersSlices,
  reviews: reviewSlices,
  reviewForm: reviewFormSlices,
  currentSorting: currentSortingSlices,
  user: userSlices
});
