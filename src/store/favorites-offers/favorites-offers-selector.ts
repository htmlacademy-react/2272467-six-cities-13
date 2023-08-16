import { State } from '../../types/state.ts';
import { TOffer } from '../../types/offers.ts';

export const getFavoritesOffers = (state: State): TOffer[] => state.favoritesOffers.favoritesOffers;
