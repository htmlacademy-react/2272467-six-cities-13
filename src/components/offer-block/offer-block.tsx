import Rating from '../rating/rating.tsx';
import ReviewList from '../review-list/review-list.tsx';
import { AuthorizationStatus } from '../../constants/authorization-status.ts';
import ReviewForm from '../review-form/review-form.tsx';
import Map from '../map/map.tsx';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useParams } from 'react-router-dom';
import NearOffersBlock from '../near-offers-block/near-offers-block.tsx';
import Preloader from '../preloader/preloader.tsx';
import NotFoundPage from '../not-found/not-found-page.tsx';
import { fetchNearOffer } from '../../store/api-actions/near-offers-action.ts';
import { fetchOffer } from '../../store/api-actions/offer-action.ts';
import { addSelectedOffer, dropOffer } from '../../store/offer/offer-slices.ts';
import { getCurrentCity } from '../../store/current-city/current-city-selectors.ts';
import { getOffer, getOfferErrorStatus, getOfferIsLoadingStatus } from '../../store/offer/offer-selectors.ts';
import { getNearOffer } from '../../store/near-offers/near-offers-selectors.ts';
import Bookmark from '../bookmark/bookmark.tsx';
import { capitalize } from '../../utils/common.ts';
import cn from 'classnames';
import { clearFormReview } from '../../store/review-form/review-form-slices.ts';
import { dropNearOffers } from '../../store/near-offers/near-offers-slices.ts';
import { getAuthorizationStatus } from '../../store/user/user-selectors.ts';

const MAX_IMAGE_OFFER = 6;
const MAX_NEAR_OFFER = 3;

function OfferBlock(): React.JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const selectedCity = useAppSelector(getCurrentCity);
  const currentOffer = useAppSelector(getOffer);
  const nearOffers = useAppSelector(getNearOffer);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isOfferLoading = useAppSelector(getOfferIsLoadingStatus);
  const hasError = useAppSelector(getOfferErrorStatus);
  const currentAndNearOffers = [...nearOffers.slice(0, MAX_NEAR_OFFER), currentOffer];

  useEffect(() => {
    if (id) {
      dispatch(fetchOffer({ id }));
      dispatch(fetchNearOffer({ id }));
      dispatch(addSelectedOffer(id));
    }

    return () => {
      dispatch(dropOffer());
      dispatch(dropNearOffers());
      dispatch(clearFormReview());
    };
  }, [dispatch, id]);

  if (isOfferLoading) {
    return <Preloader/>;
  }

  if (hasError || !currentOffer) {
    return <NotFoundPage/>;
  }

  const {
    images, isPremium, title,
    rating, bedrooms, maxAdults, type,
    price, goods, description, isFavorite,
    host: { avatarUrl, isPro, name }
  } = currentOffer;

  return (
    <>
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {images.slice(0, MAX_IMAGE_OFFER).map((image) => (
              <div key={image} className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src={image}
                  alt="Photo studio"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {isPremium &&
              <div className="offer__mark">
                <span>Premium</span>
              </div>}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {title}
              </h1>
              <Bookmark
                id={id}
                isFavorite={isFavorite}
                block={'offer'}
              />
            </div>
            <Rating rating={rating} block={'offer'}/>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">{capitalize(type)}</li>
              <li className="offer__feature offer__feature--bedrooms">
                {bedrooms} {bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}
              </li>
              <li className="offer__feature offer__feature--adults">
                Max {maxAdults} {maxAdults === 1 ? 'adult' : 'adults'}
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">€{price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside </h2>
              <ul className="offer__inside-list">
                {goods.map((item) => (
                  <li key={item} className="offer__inside-item">{item}</li>
                ))}
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className={cn(
                  'offer__avatar-wrapper user__avatar-wrapper',
                  { 'offer__avatar-wrapper--pro': isPro }
                )}
                >
                  <img
                    className="offer__avatar user__avatar "
                    src={avatarUrl}
                    width={74}
                    height={74}
                    alt="Host avatar"
                  />
                </div>
                <span className="offer__user-name">{name}</span>
                {isPro && <span className="offer__user-status">Pro</span>}
              </div>
              <div className="offer__description">
                <p className="offer__text">
                  {description}
                </p>
              </div>
            </div>
            <section className="offer__reviews reviews">
              <ReviewList id={id}/>
              {authorizationStatus === AuthorizationStatus.Auth && <ReviewForm id={id}/>}
            </section>
          </div>
        </div>
        <Map offers={currentAndNearOffers} selectedCity={selectedCity} page={'offer'}/>
      </section>
      <div className="container">
        <NearOffersBlock nearOffers={nearOffers}/>
      </div>
    </>
  );
}

export default OfferBlock;
