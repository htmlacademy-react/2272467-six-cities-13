import { store } from '../store';
import { City } from '../constants/city.ts';
import { TOffer } from './offers.ts';
import { TReview } from './review.ts';
import { AuthorizationStatus } from '../constants/authorization-status.ts';
import { TSorting } from './sorting.ts';

export type TInitialState = {
  currentCity: City;
  offers: TOffer[];
  offer: TOffer | null;
  favoritesOffers: TOffer[];
  nearOffers: TOffer[];
  isOffersLoading: boolean;
  reviews: TReview[];
  authorizationStatus: AuthorizationStatus;
  currentSorting: TSorting;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
