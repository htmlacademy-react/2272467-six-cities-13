import React from 'react';
import cn from 'classnames';

const getWidthRating = (rating: number) => Math.round(rating) / 5 * 100;

type TRating = {
  rating: number;
  block: 'review' | 'offer' | 'place';
}

function Rating({ rating, block }: TRating): React.JSX.Element {
  return (
    <div className={cn(
      'rating',
      { 'offer__rating': block === 'offer' },
      { 'reviews__rating': block === 'review' },
      { 'place-card__rating': block === 'place' }
    )}
    >
      <div className={cn(
        'rating__stars',
        { 'offer__stars': block === 'offer' },
        { 'reviews__stars': block === 'review' },
        { 'place-card__stars': block === 'place' }
      )}
      >
        <span style={{ width: `${getWidthRating(rating)}%` }}/>
        <span className="visually-hidden">Rating</span>
      </div>
      {block === 'offer' && <span className="offer__rating-value rating__value">{rating}</span>}
    </div>
  );
}

export default Rating;
