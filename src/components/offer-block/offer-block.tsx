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
import { dropOffer } from '../../store/offer/offer-slices.ts';
import { getCurrentCity } from '../../store/current-city/current-city-selector.ts';
import { getOffer, getOfferErrorStatus, getOfferIsLoadingStatus } from '../../store/offer/offer-selector.ts';
import { getNearOffer } from '../../store/near-offers/near-offers-selector.ts';


function OfferBlock(): React.JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const selectedCity = useAppSelector(getCurrentCity);
  const currentOffer = useAppSelector(getOffer);
  const nearOffers = useAppSelector(getNearOffer);
  const authorizationStatus = useAppSelector((state) => state.user.authorizationStatus);
  const isOfferLoading = useAppSelector(getOfferIsLoadingStatus);
  const hasError = useAppSelector(getOfferErrorStatus);
  const currentAndNearOffers = [...nearOffers.slice(0, 3), currentOffer];


  useEffect(() => {
    if (id) {
      dispatch(fetchOffer({ id }));
      dispatch(fetchNearOffer({ id }));
    }

    return () => {
      dispatch(dropOffer());
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
    rating, bedrooms, maxAdults,
    price, goods, description,
    host: { avatarUrl, isPro, name }
  } = currentOffer;

  return (
    <>
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {images.slice(0, 6).map((image) => (
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
              <button className="offer__bookmark-button button" type="button">
                <svg className="offer__bookmark-icon" width={31} height={33}>
                  <use xlinkHref="#icon-bookmark"/>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <Rating rating={rating} block={'offer'}/>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">Apartment</li>
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
                <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                  <img
                    className="offer__avatar user__avatar"
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
