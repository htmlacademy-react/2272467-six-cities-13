import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants/app-route.ts';
import { TOffer } from '../../types/offers.ts';
import Rating from '../rating/rating.tsx';

type TOfferCardProps = {
  offer: TOffer;
  view: 'horizontal' | 'vertical';
  onAddActive?: () => void;
}

function OfferCard({ offer, view, onAddActive }: TOfferCardProps): React.JSX.Element {
  const {
    id, title, type, price,
    isPremium, previewImage, rating
  } = offer;

  return (
    <article
      className={`${view === 'horizontal' ? 'cities__card' : 'favorites__card'} place-card`}
      onMouseOver={onAddActive}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div
        className={`${view === 'horizontal' ? 'cities__image-wrapper' : 'favorites__image-wrapper'} place-card__image-wrapper`}
      >
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img className="place-card__image"
            src={previewImage}
            width={view === 'horizontal' ? 260 : 150}
            height={view === 'horizontal' ? 200 : 110}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={`${view === 'horizontal' ? '' : 'favorites__card-info'} "place-card__info"`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <Rating rating={rating} style={'offer'}/>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
