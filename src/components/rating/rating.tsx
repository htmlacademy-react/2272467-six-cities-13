import React from 'react';

function getWidthRating(rating: number): number {
  switch (rating) {
    case 1:
      return 20;
    case 2:
      return 40;
    case 3:
      return 60;
    case 4:
      return 80;
    case 5:
      return 100;
  }
}

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
