import { createAction } from '@reduxjs/toolkit';
import { City } from '../constants/city.ts';
import { TOffer } from '../types/offers.ts';
import { AuthorizationStatus } from '../constants/authorization-status.ts';

export const setCurrentCity = createAction<City>('offers/setCurrentCity');

export const getOffers = createAction<TOffer[]>('offers/get');

export const getNearOffers = createAction('nearOffers/get');

export const getReview = createAction('review/get');

export const getOffer = createAction<string>('offer/get');

export const dropOffer = createAction('offer/drop');

export const requireAuthorizationStatus = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('error/set');
