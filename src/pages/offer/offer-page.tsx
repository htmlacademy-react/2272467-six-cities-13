import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ReviewForm from '../../components/review-form/review-form.tsx';
import ReviewList from '../../components/review-list/review-list.tsx';
import Map from '../../components/map/map.tsx';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { dropOffer, getOffer, getOffers, getReview } from '../../store/action.ts';
import NearOffersBlock from '../../components/near-offers-block/near-offers-block.tsx';
import NotFoundPage from '../../components/not-found/not-found-page.tsx';
import Rating from '../../components/rating/rating.tsx';


function OfferPage(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const selectedCity = useAppSelector((state) => state.currentCity);
  const offers = useAppSelector((state) => state.offers);
  const currentOffer = useAppSelector((state) => state.offer);

  useEffect(() => {
    if (id) {
      dispatch(getOffers());
      dispatch(getReview());
      dispatch(getOffer(id));
    }

    return () => {
      dispatch(dropOffer);
    };
  }, [dispatch, id]);

  if (!currentOffer) {
    return <NotFoundPage/>;
  }

  return (
    <div className="page">
      <Helmet>
        <title>Offer</title>
      </Helmet>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {currentOffer.images.map((image) => (
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
                  {currentOffer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {currentOffer.maxAdults} adults
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
                <ReviewList/>
                <ReviewForm/>
              </section>
            </div>
          </div>
          <Map offers={offers} selectedCity={selectedCity} selectedOffer={currentOffer} page={'offer'}/>
        </section>
        <div className="container">
          <NearOffersBlock/>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
