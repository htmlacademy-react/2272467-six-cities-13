import React, { useEffect } from 'react';
import Review from '../review/review.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchReviews } from '../../store/api-actions/review-action.ts';
import { getReviews } from '../../store/review/review-selectors.ts';

const MAX_REVIEW = 10;

type ReviewListProps = {
  id: string | undefined;
}

function ReviewList({ id }: ReviewListProps): React.JSX.Element {
  const dispatch = useAppDispatch();
  const reviews = useAppSelector(getReviews);
  const sortReview = [...reviews].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  useEffect(() => {
    if (id) {
      dispatch(fetchReviews({ id }));
    }
  }, [dispatch, id]);

  return (
    <>
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {sortReview.slice(0, MAX_REVIEW).map((review) => <Review key={review.id} review={review}/>)}
      </ul>
    </>
  );
}

export default ReviewList;
