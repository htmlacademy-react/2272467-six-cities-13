import { State } from '../../types/state.ts';
import { NameSpace } from '../../constants/name-space.ts';

export const getReviewForm = (state: Pick<State, NameSpace.ReviewsForm>) => state[NameSpace.ReviewsForm];
