import { TOffer } from '../../types/offers.ts';
import { State } from '../../types/state.ts';
import { NameSpace } from '../../constants/name-space.ts';

export const getNearOffer = (state: Pick<State, NameSpace.NearOffers>): TOffer[] => state[NameSpace.NearOffers].nearOffers;

