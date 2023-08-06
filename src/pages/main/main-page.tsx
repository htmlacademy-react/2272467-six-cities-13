import React from 'react';
import { Helmet } from 'react-helmet-async';
import CitiesList from '../../components/cities-list/cities-list.tsx';
import CitiesBlock from '../../components/cities-block/cities-block.tsx';
import { useAppSelector } from '../../hooks';
import Preloader from '../../components/preloader/preloader.tsx';


function MainPage(): React.JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const selectedCity = useAppSelector((state) => state.currentCity);
  const offersByCity = offers.filter((offer) => offer.city.name === selectedCity);
  const isOffersLoading = useAppSelector((state) => state.isOffersLoading);
  const offerIsEmpty = offersByCity.length < 1;

  if (isOffersLoading) {
    return <Preloader/>;
  }

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Main</title>
      </Helmet>
      <main className={`page__main page__main--index ${offerIsEmpty ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList selectedCity={selectedCity}/>
          </section>
        </div>
        <CitiesBlock offers={offersByCity} selectedCity={selectedCity} offerIsEmpty={offerIsEmpty}/>
      </main>
    </div>
  );
}

export default MainPage;
