import { combineReducers } from '@reduxjs/toolkit';
import currentCitySlices from './current-city/current-city-slices.ts';
import offersSlices from './offers/offers-slices.ts';
import offerSlices from './offer/offer-slices.ts';
import favoritesOffersSlices from './favorites-offers/favorites-offers-slices.ts';
import nearOffersSlices from './near-offers/near-offers-slices.ts';
import reviewSlices from './review/review-slices.ts';
import reviewFormSlices from './review-form/review-form-slices.ts';
import currentSortingSlices from './current-sorting/current-sorting-slices.ts';
import userSlices from './user/user-slices.ts';
import loginFormSlices from './login-form/login-form-slices.ts';

export const rootReducer = combineReducers({
  currentCity: currentCitySlices,
  offers: offersSlices,
  offer: offerSlices,
  favoritesOffers: favoritesOffersSlices,
  nearOffers: nearOffersSlices,
  reviews: reviewSlices,
  reviewForm: reviewFormSlices,
  currentSorting: currentSortingSlices,
  user: userSlices,
  loginForm: loginFormSlices
});
