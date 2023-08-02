import React from 'react';

const getWidthRating = (rating: number) => Math.round(rating) / 5 * 100;

type TRating = {
  rating: number;
  style: 'review' | 'offer';
}

function Rating({ rating, style }: TRating): React.JSX.Element {
  return (
    <div className={`${style === 'review' ? 'reviews__rating' : 'place-card__rating'} rating`}>
      <div className={`${style === 'review' ? 'reviews__stars' : 'place-card__stars'} rating__stars`}>
        <span style={{ width: `${getWidthRating(rating)}%` }}/>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}

export default Rating;
