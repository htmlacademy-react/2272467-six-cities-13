import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import CitiesList from '../../cities-list/cities-list.tsx';
import { TCity, TOffer, TOffers } from '../../../types/offers.ts';
import OfferList from '../../offer-list/offer-list.tsx';
import Map from '../../map/map.tsx';


type TMainPageProps = {
  offers: TOffers;
  cities: TCity[];
}

function MainPage({ offers, cities }: TMainPageProps): React.JSX.Element {
  const [selectedCity, setSelectedCity] = useState<TCity>(cities[0]);

  const [
    selectedOffer,
    setSelectedOffer
  ] = useState<Pick<TOffer, 'id'> | undefined>(undefined);

  function handelSelectedCity(city: TCity) {
    if (selectedCity.id !== city.id) {
      setSelectedCity(city);
    }
  }

  function handleSelectedOffer(id: string) {
    if (selectedOffer?.id !== id) {
      setSelectedOffer({ id });
    }
  }

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Main</title>
      </Helmet>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList onSelectedCity={handelSelectedCity}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {selectedCity.name}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <OfferList offers={offers} onSelectedOffer={handleSelectedOffer}/>
            </section>
            <div className="cities__right-section">
              <Map offers={offers} selectedCity={selectedCity} selectedOffer={selectedOffer}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
