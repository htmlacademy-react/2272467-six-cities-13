import React from 'react';
import { TReview } from '../../types/review.ts';
import Review from '../review/review.tsx';

type TReviewList = {
  reviews: TReview[];
}

function ReviewList({ reviews }: TReviewList): React.JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => <Review key={review.id} review={review}/>)}
    </ul>
  );
}

export default ReviewList;
