import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TReview } from '../../types/review.ts';

type TReviewsState = {
  reviews: TReview[];
}

const initialState: TReviewsState = {
  reviews: []
};

const reviewsSlices = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    setReviews(state, action: PayloadAction<TReview[]>) {
      state.reviews = action.payload;
    },
    addReview(state, action: PayloadAction<TReview>) {
      state.reviews.push(action.payload);
    }
  }
});

export default reviewsSlices.reducer;

export const { setReviews, addReview } = reviewsSlices.actions;

