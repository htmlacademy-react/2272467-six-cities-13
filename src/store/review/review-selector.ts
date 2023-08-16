import { State } from '../../types/state.ts';
import { TReview } from '../../types/review.ts';

export const getReview = (state: State): TReview[] => state.reviews.reviews;
