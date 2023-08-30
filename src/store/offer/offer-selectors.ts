import { TOffer } from '../../types/offers.ts';
import { State } from '../../types/state.ts';
import { NameSpace } from '../../constants/name-space.ts';

export const getOffer = (state: Pick<State, NameSpace.Offer>): TOffer | null => state[NameSpace.Offer].offer;

export const getOfferIsLoadingStatus = (state: Pick<State, NameSpace.Offer>): boolean => state[NameSpace.Offer].isLoading;

export const getOfferErrorStatus = (state: Pick<State, NameSpace.Offer>): boolean => state[NameSpace.Offer].hasError;

export const getSelectedOffer = (state: Pick<State, NameSpace.Offer>) => state[NameSpace.Offer].selectedOffer;
