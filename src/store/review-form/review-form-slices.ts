import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { submitReview } from '../api-actions/review-action.ts';

type TReviewsFormState = {
  comment: string;
  rating: number | null;
  isValid: boolean;
  isSends: boolean;
}

const initialState: TReviewsFormState = {
  comment: '',
  rating: null,
  isValid: false,
  isSends: false
};

const reviewsFormSlices = createSlice({
  name: 'reviewsForm',
  initialState,
  reducers: {
    updateComment(state, action: PayloadAction<string>) {
      state.comment = action.payload;
    },
    updateRating(state, action: PayloadAction<number>) {
      state.rating = action.payload;
    },
    setFormReviewValid(state, action: PayloadAction<boolean>) {
      state.isValid = action.payload;
    },
    clearFormReview(state) {
      state.comment = '';
      state.rating = null;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(submitReview.pending, (state) => {
        state.isSends = true;
      })
      .addCase(submitReview.fulfilled, (state) => {
        state.isSends = false;
      });
  }
});

export default reviewsFormSlices.reducer;

export const {
  updateComment,
  updateRating,
  setFormReviewValid,
  clearFormReview
} = reviewsFormSlices.actions;

