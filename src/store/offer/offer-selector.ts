import { TOffer } from '../../types/offers.ts';
import { State } from '../../types/state.ts';

export const getOffer = (state: State): TOffer | null => state.offer.offer;

export const getOfferIsLoadingStatus = (state: State): boolean => state.offer.isLoading;

export const getOfferErrorStatus = (state: State): boolean => state.offer.hasError;
