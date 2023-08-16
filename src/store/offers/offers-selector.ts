import { State } from '../../types/state.ts';
import { TOffer } from '../../types/offers.ts';

export const getOffers = (state: State): TOffer[] => state.offers.offers;

export const getOffersIsLoadingStatus = (state: State): boolean => state.offers.isLoading;
