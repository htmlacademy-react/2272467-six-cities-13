import { createAction } from '@reduxjs/toolkit';
import { City } from '../constants/city.ts';
import { TOffer } from '../types/offers.ts';
import { AuthorizationStatus } from '../constants/authorization-status.ts';
import { TReview } from '../types/review.ts';

export const setCurrentCity = createAction<City>('offers/setCurrentCity');

export const getOffers = createAction<TOffer[]>('offers/get');

export const getNearOffers = createAction<TOffer[]>('nearOffers/get');

export const getReviews = createAction<TReview[]>('review/get');

export const getOffer = createAction<TOffer>('offer/get');

export const dropOffer = createAction('offer/drop');

export const requireAuthorizationStatus = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('error/set');

export const getFavoritesOffers = createAction<TOffer[]>('favorite/get');

export const setOffersLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
