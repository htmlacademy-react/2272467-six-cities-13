import { describe, expect } from 'vitest';
import { NameSpace } from '../../constants/name-space.ts';
import { getReviewForm } from './review-form-selectors.ts';

describe('ReviewsForm selectors', () => {
  const testComment = 'test comment';
  const testRating = 4;
  const state = {
    [NameSpace.ReviewsForm]: {
      comment: testComment,
      rating: testRating,
      isValid: false,
      isSends: false
    }
  };

  it('should return "reviewForm" from state ', () => {
    const reviewForm = state[NameSpace.ReviewsForm];
    const result = getReviewForm(state);
    expect(result).toEqual(reviewForm);
  });
});
