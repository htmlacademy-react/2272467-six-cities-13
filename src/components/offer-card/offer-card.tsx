import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants/app-route.ts';
import { TOffer } from '../../types/offers.ts';
import Rating from '../rating/rating.tsx';
import cn from 'classnames';

type TOfferCardProps = {
  offer: TOffer;
  block: 'cities' | 'favorite' | 'near';
  onSelectedOffer?: (id: string) => void;
}

function OfferCard({ offer, block, onSelectedOffer }: TOfferCardProps): React.JSX.Element {
  const {
    id, title, type, price,
    isPremium, previewImage, rating
  } = offer;

  return (
    <article
      className={cn(
        'place-card',
        { 'cities__card': block === 'cities' },
        { 'favorites__card': block === 'favorite' },
        { 'near-places__card': block === 'near' }
      )}
      onMouseOver={() => onSelectedOffer ? onSelectedOffer(id) : null}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div
        className={cn(
          'place-card__image-wrapper',
          { 'cities__image-wrapper': block === 'cities' },
          { 'favorites__image-wrapper': block === 'favorite' },
          { 'near-places__image-wrapper': block === 'near' }
        )}
      >
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img className="place-card__image"
            src={previewImage}
            width={block === 'favorite' ? 150 : 260}
            height={block === 'favorite' ? 110 : 200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={cn(
        'place-card__info',
        { 'favorites__card-info': block === 'favorite' }
      )}
      >
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
        <Rating rating={rating} block={'place'}/>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
