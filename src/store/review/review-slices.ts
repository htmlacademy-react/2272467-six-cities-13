import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TReview } from '../../types/review.ts';
import { fetchReviews } from '../api-actions/review-action.ts';
import { NameSpace } from '../../constants/name-space.ts';

type TReviewsState = {
  reviews: TReview[];
}

const initialState: TReviewsState = {
  reviews: []
};

const reviewsSlices = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {
    addReview(state, action: PayloadAction<TReview>) {
      state.reviews.push(action.payload);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  }
});

export default reviewsSlices.reducer;

export const { addReview } = reviewsSlices.actions;

