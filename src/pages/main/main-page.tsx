import React from 'react';
import { Helmet } from 'react-helmet-async';
import CitiesList from '../../components/cities-list/cities-list.tsx';
import CitiesBlock from '../../components/cities-block/cities-block.tsx';
import { useAppSelector } from '../../hooks';
import Preloader from '../../components/preloader/preloader.tsx';
import { getCurrentCity } from '../../store/current-city/current-city-selector.ts';
import { getOffers, getOffersIsLoadingStatus } from '../../store/offers/offers-selector.ts';
import cn from 'classnames';


function MainPage(): React.JSX.Element {
  const offers = useAppSelector(getOffers);
  const selectedCity = useAppSelector(getCurrentCity);
  const isOffersLoading = useAppSelector(getOffersIsLoadingStatus);
  const offerIsEmpty = offers.length === 0;

  if (isOffersLoading) {
    return <Preloader/>;
  }


  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Main</title>
      </Helmet>
      <main className={cn(
        'page__main page__main--index',
        { 'page__main--index-empty': offerIsEmpty })}
      >
        < h1 className='visually-hidden'>Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList selectedCity={selectedCity}/>
          </section>
        </div>
        <CitiesBlock offers={offers} selectedCity={selectedCity} offerIsEmpty={offerIsEmpty}/>
      </main>
    </div>
  );
}

export default MainPage;
