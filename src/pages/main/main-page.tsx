import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import CitiesList from '../../components/cities-list/cities-list.tsx';
import CitiesBlock from '../../components/cities-block/cities-block.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getOffers } from '../../store/action.ts';

function MainPage(): React.JSX.Element {
  const dispatch = useAppDispatch();

  const offers = useAppSelector((state) => state.offers);
  const selectedCity = useAppSelector((state) => state.currentCity);
  const offersByCity = offers.filter((offer) => offer.city.name === selectedCity.name);

  useEffect(() => {
    dispatch(getOffers());
  },[dispatch]);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Main</title>
      </Helmet>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList selectedCity={selectedCity}/>
          </section>
        </div>
        <CitiesBlock offers={offersByCity} selectedCity={selectedCity}/>
      </main>
    </div>
  );
}

export default MainPage;
