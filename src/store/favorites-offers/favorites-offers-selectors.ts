import { State } from '../../types/state.ts';
import { TOffer } from '../../types/offers.ts';
import { NameSpace } from '../../constants/name-space.ts';

export const getFavoritesOffers = (state: Pick<State, NameSpace.FavoritesOffers>): TOffer[] => state[NameSpace.FavoritesOffers].favoritesOffers;

export const getFavoritesOffersIsLoadingStatus = (state: Pick<State, NameSpace.FavoritesOffers>): boolean => state[NameSpace.FavoritesOffers].isLoading;
