import { State } from '../../types/state.ts';
import { TReview } from '../../types/review.ts';
import { NameSpace } from '../../constants/name-space.ts';

export const getReviews = (state: Pick<State, NameSpace.Reviews>): TReview[] => state[NameSpace.Reviews].reviews;
