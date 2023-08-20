import { State } from '../../types/state.ts';
import { TOffer } from '../../types/offers.ts';
import { NameSpace } from '../../constants/name-space.ts';

export const getOffers = (state: Pick<State, NameSpace.Offers>): TOffer[] => state[NameSpace.Offers].offers;

export const getOffersIsLoadingStatus = (state: Pick<State, NameSpace.Offers>): boolean => state[NameSpace.Offers].isLoading;
