import React, { useEffect } from 'react';
import Review from '../review/review.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { TOffer } from '../../types/offers.ts';
import { fetchReviews } from '../../store/api-actions/review-action.ts';

type ReviewListProps = {
  id: Pick<TOffer, 'id'> | undefined;
}

function ReviewList({ id }: ReviewListProps): React.JSX.Element {
  const dispatch = useAppDispatch();
  const reviews = useAppSelector((state) => state.reviews);
  const sortReview = [...reviews].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  useEffect(() => {
    dispatch(fetchReviews({ id }));
  }, [dispatch, id]);

  return (
    <>
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {sortReview.slice(0, 10).map((review) => <Review key={review.id} review={review}/>)}
      </ul>
    </>
  );
}

export default ReviewList;
