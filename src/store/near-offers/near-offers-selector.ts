import { TOffer } from '../../types/offers.ts';
import { State } from '../../types/state.ts';

export const getNearOffer = (state: State): TOffer[] => state.nearOffers.nearOffers;

