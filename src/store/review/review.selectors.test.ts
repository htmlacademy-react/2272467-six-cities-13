import { describe, expect } from 'vitest';
import { NameSpace } from '../../constants/name-space.ts';
import { getReviews } from './review-selectors.ts';
import { makeFakeReview } from '../../utils/mocks/mocks.ts';

describe('Reviews selectors', () => {
  const mockReview = makeFakeReview();
  const state = {
    [NameSpace.Reviews]: {
      reviews: [mockReview]
    }
  };

  it('should return "reviews" from state ', () => {
    const { reviews } = state[NameSpace.Reviews];
    const result = getReviews(state);
    expect(result).toEqual(reviews);
  });
});
