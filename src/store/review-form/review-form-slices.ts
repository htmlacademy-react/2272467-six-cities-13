import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    setFormReviewSendsStatus(state, action: PayloadAction<boolean>) {
      state.isSends = action.payload;
    },
    clearFormReview(state) {
      state.comment = '';
      state.rating = null;
    }
  }
});

export default reviewsFormSlices.reducer;

export const {
  updateComment,
  updateRating,
  setFormReviewValid,
  setFormReviewSendsStatus,
  clearFormReview
} = reviewsFormSlices.actions;

