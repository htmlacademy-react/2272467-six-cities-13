import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants/app-route.ts';
import { TOffer } from '../../types/offers.ts';
import Rating from '../rating/rating.tsx';
import cn from 'classnames';
import Bookmark from '../bookmark/bookmark.tsx';
import { useAppDispatch } from '../../hooks';
import { addSelectedOffer } from '../../store/offer/offer-slices.ts';
import { capitalize } from '../../utils/common.ts';
import { OfferType } from '../../constants/offer.ts';

type TOfferCardProps = {
  offer: TOffer;
  block: 'cities' | 'favorite' | 'near';
}

function OfferCard({ offer, block }: TOfferCardProps): React.JSX.Element {
  const dispatch = useAppDispatch();
  const {
    id, title, type, price,
    isPremium, previewImage, rating, isFavorite
  } = offer;

  const handleCardMouseOver = () => {
    if (block === 'cities') {
      dispatch(addSelectedOffer(id));
    }
  };

  const handleCardMouseLeave = () => {
    if (block === 'cities') {
      dispatch(addSelectedOffer(null));
    }
  };

  return (
    <article
      className={cn(
        'place-card',
        { 'cities__card': block === 'cities' },
        { 'favorites__card': block === 'favorite' },
        { 'near-places__card': block === 'near' }
      )}
      onMouseOver={handleCardMouseOver}
      onMouseLeave={handleCardMouseLeave}
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
          <Bookmark
            id={id}
            isFavorite={isFavorite}
            block={'place-card'}
          />
        </div>
        <Rating rating={rating} block={'place'}/>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type === OfferType.Room ? 'Private room' : capitalize(type)}</p>
      </div>
    </article>
  );
}

export default OfferCard;
