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
import { dropOffer } from '../../store/slices/offer-slices.ts';

function OfferBlock(): React.JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const selectedCity = useAppSelector((state) => state.currentCity.currentCity);
  const currentOffer = useAppSelector((state) => state.offer.offer);
  const nearOffers = useAppSelector((state) => state.nearOffers.nearOffers);
  const authorizationStatus = useAppSelector((state) => state.user.authorizationStatus);
  const isOfferLoading = useAppSelector((state) => state.offer.isLoading);
  const currentAndNearOffers = [...nearOffers.slice(0, 3), currentOffer];

  useEffect(() => {
    if (id) {
      dispatch(fetchOffer({ id }));
      dispatch(fetchNearOffer({ id }));
    }

    return () => {
      dispatch(dropOffer);
    };
  }, [dispatch, id]);

  if (isOfferLoading) {
    return <Preloader/>;
  } else if (!currentOffer) {
    return <NotFoundPage/>;
  }

  return (
    <>
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {currentOffer.images.slice(0, 6).map((image) => (
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
            {currentOffer.isPremium &&
              <div className="offer__mark">
                <span>Premium</span>
              </div>}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {currentOffer.title}
              </h1>
              <button className="offer__bookmark-button button" type="button">
                <svg className="offer__bookmark-icon" width={31} height={33}>
                  <use xlinkHref="#icon-bookmark"/>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <Rating rating={currentOffer.rating} block={'offer'}/>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">Apartment</li>
              <li className="offer__feature offer__feature--bedrooms">
                {currentOffer.bedrooms} {currentOffer.bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}
              </li>
              <li className="offer__feature offer__feature--adults">
                Max {currentOffer.maxAdults} {currentOffer.maxAdults === 1 ? 'adult' : 'adults'}
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">€{currentOffer.price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside </h2>
              <ul className="offer__inside-list">
                {currentOffer.goods.map((item) => (
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
                    src={currentOffer.host.avatarUrl}
                    width={74}
                    height={74}
                    alt="Host avatar"
                  />
                </div>
                <span className="offer__user-name">{currentOffer.host.name}</span>
                {currentOffer.host.isPro && <span className="offer__user-status">Pro</span>}
              </div>
              <div className="offer__description">
                <p className="offer__text">
                  {currentOffer.description}
                </p>
              </div>
            </div>
            <section className="offer__reviews reviews">
              <ReviewList id={id}/>
              {authorizationStatus === AuthorizationStatus.Auth && <ReviewForm id={id}/>}
            </section>
          </div>
        </div>
        <Map offers={currentAndNearOffers} selectedCity={selectedCity} selectedOffer={currentOffer} page={'offer'}/>
      </section>
      <div className="container">
        <NearOffersBlock nearOffers={nearOffers}/>
      </div>
    </>
  );
}

export default OfferBlock;
