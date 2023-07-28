import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import CitiesList from '../../cities-list/cities-list.tsx';
import { TCity, TOffer, TOffers } from '../../../types/offers.ts';
import OfferList from '../../offer-list/offer-list.tsx';
import Map from '../../map/map.tsx';
import SortForm from '../../sort-form/sort-form.tsx';


type TMainPageProps = {
  offers: TOffers;
  cities: TCity[];
}

function MainPage({ offers, cities }: TMainPageProps): React.JSX.Element {
  const [selectedCity, setSelectedCity] = useState<TCity>(cities[0]);
  const [offersList, setOffersList] = useState<TOffers>(offers);

  const [
    selectedOffer,
    setSelectedOffer
  ] = useState<Pick<TOffer, 'id'> | undefined>(undefined);

  function handelSelectedCity(city: TCity) {
    const offersListByCity = offers.filter((offer) => offer.city.name === city.name);

    setSelectedCity(city);
    setOffersList(offersListByCity);
  }

  function handleSelectedOffer(id: string) {
    if (selectedOffer?.id !== id) {
      setSelectedOffer({ id });
    }
  }

  useEffect(() => {
    handelSelectedCity(selectedCity);
  }, []);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Main</title>
      </Helmet>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList onSelectedCity={handelSelectedCity} selectedCity={selectedCity}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersList.length} places to stay in {selectedCity.name}</b>
              <SortForm/>
              <OfferList offers={offersList} onSelectedOffer={handleSelectedOffer} page={'main'}/>
            </section>
            <div className="cities__right-section">
              <Map offers={offersList} selectedCity={selectedCity} selectedOffer={selectedOffer} page={'main'}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
