import { expect } from 'vitest';
import reviewFormSlices, {
  clearFormReview,
  setFormReviewValid,
  updateComment,
  updateRating
} from './review-form-slices.ts';
import { makeFakeReviewDataForm } from '../../utils/mocks/mocks.ts';
import { submitReview } from '../api-actions/review-action.ts';

describe('ReviewsForm Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      comment: '',
      rating: null,
      isValid: false,
      isSends: false
    };

    const result = reviewFormSlices(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state and undefined action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      comment: '',
      rating: null,
      isValid: false,
      isSends: false
    };

    const result = reviewFormSlices(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should update comment with "updateComment" action', () => {
    const { comment } = makeFakeReviewDataForm();
    const expectedState = {
      comment: comment,
      rating: null,
      isValid: false,
      isSends: false
    };

    const result = reviewFormSlices(undefined, updateComment(comment));

    expect(result).toEqual(expectedState);
  });

  it('should update rating with "updateRating" action', () => {
    const { rating } = makeFakeReviewDataForm();
    const expectedState = {
      comment: '',
      rating: rating,
      isValid: false,
      isSends: false
    };

    const result = reviewFormSlices(undefined, updateRating(rating));

    expect(result).toEqual(expectedState);
  });

  it('should set "isValid" to "true" with "setFormReviewValid" action', () => {
    const expectedState = {
      comment: '',
      rating: null,
      isValid: true,
      isSends: false
    };

    const result = reviewFormSlices(undefined, setFormReviewValid(true));

    expect(result).toEqual(expectedState);
  });

  it('should set "isValid" to "false" with "setFormReviewValid" action', () => {
    const expectedState = {
      comment: '',
      rating: null,
      isValid: false,
      isSends: false
    };

    const result = reviewFormSlices(undefined, setFormReviewValid(false));

    expect(result).toEqual(expectedState);
  });

  it('should return clear review form with "clearFormReview" action', () => {
    const initialState = {
      comment: 'Hello',
      rating: 4,
      isValid: false,
      isSends: false
    };

    const expectedState = {
      comment: '',
      rating: null,
      isValid: false,
      isSends: false
    };

    const result = reviewFormSlices(initialState, clearFormReview());

    expect(result).toEqual(expectedState);
  });

  it('should set "isSend" to "true" with "submitReview.pending"', () => {
    const mockReviewDataForm = makeFakeReviewDataForm();
    const expectedState = {
      comment: '',
      rating: null,
      isValid: false,
      isSends: true
    };

    const result = reviewFormSlices(undefined, submitReview.pending('', {
      id: crypto.randomUUID(),
      reviewData: mockReviewDataForm
    }));

    expect(result).toEqual(expectedState);
  });

  it('should set "isSend" to "false" with "submitReview.fulfilled"', () => {
    const mockReviewDataForm = makeFakeReviewDataForm();
    const initialState = {
      comment: '',
      rating: null,
      isValid: false,
      isSends: true
    };

    const expectedState = {
      comment: '',
      rating: null,
      isValid: false,
      isSends: false
    };

    const result = reviewFormSlices(initialState, submitReview.fulfilled(undefined, '', {
      id: crypto.randomUUID(),
      reviewData: mockReviewDataForm
    }));

    expect(result).toEqual(expectedState);
  });
});
