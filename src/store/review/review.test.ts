import { expect } from 'vitest';
import { makeFakeReview } from '../../utils/mocks/mocks.ts';
import reviewSlices, { addReview } from './review-slices.ts';
import { fetchReviews } from '../api-actions/review-action.ts';

describe('Reviews Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      reviews: []
    };

    const result = reviewSlices(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state and undefined action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      reviews: []
    };

    const result = reviewSlices(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should add selected offer with "addReview" action', () => {
    const initialState = {
      reviews: []
    };
    const mockReview = makeFakeReview();

    const expectedState = {
      reviews: [mockReview]
    };

    const result = reviewSlices(initialState, addReview(mockReview));

    expect(result).toEqual(expectedState);
  });

  it('should set selected offer with "fetchReviews.fulfilled"', () => {
    const initialState = {
      reviews: []
    };
    const mockReview = makeFakeReview();

    const expectedState = {
      reviews: [mockReview]
    };

    const result = reviewSlices(initialState, fetchReviews.fulfilled([mockReview], '', { id: crypto.randomUUID() }));

    expect(result).toEqual(expectedState);
  });
});
