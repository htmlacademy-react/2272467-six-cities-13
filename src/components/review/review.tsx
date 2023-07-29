import dayjs from 'dayjs';
import React from 'react';
import { TReview } from '../../types/review.ts';
import Rating from '../rating/rating.tsx';


type TReviewProps = {
  review: TReview;
}

function Review({ review }: TReviewProps): React.JSX.Element {
  const { date, user, comment, rating } = review;
  const { name, avatarUrl } = user;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <Rating rating={rating} style={'review'}/>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>
          {dayjs(date).format('MMMM YYYY')}
        </time>
      </div>
    </li>
  );
}

export default Review;
