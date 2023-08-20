import { TOffer } from '../../types/offers.ts';
import { State } from '../../types/state.ts';
import { NameSpace } from '../../constants/name-space.ts';

export const getOffer = (state: Pick<State, NameSpace.Offer>): TOffer | null => state.offer.offer;

export const getOfferIsLoadingStatus = (state: Pick<State, NameSpace.Offer>): boolean => state.offer.isLoading;

export const getOfferErrorStatus = (state: Pick<State, NameSpace.Offer>): boolean => state.offer.hasError;
