import React, { useEffect } from 'react';
import Review from '../review/review.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getReview } from '../../store/action.ts';

function ReviewList(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const reviews = useAppSelector((state) => state.reviews);

  useEffect(() => {
    dispatch(getReview());
  }, [dispatch]);

  return (
    <>
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => <Review key={review.id} review={review}/>)}
      </ul>
    </>
  );
}

export default ReviewList;
