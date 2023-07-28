import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import CitiesList from '../../cities-list/cities-list.tsx';
import { TCity, TOffer } from '../../../types/offers.ts';
import CitiesBlock from '../../cities-block/cities-block.tsx';


type TMainPageProps = {
  offers: TOffer[];
  cities: TCity[];
}

function MainPage({ offers, cities }: TMainPageProps): React.JSX.Element {
  const [selectedCity, setSelectedCity] = useState<TCity>(cities[0]);
  const [offersList, setOffersList] = useState<TOffer[]>(offers);

  function handelSelectedCity(city: TCity) {
    const offersListByCity = offers.filter((offer) => offer.city.name === city.name);

    setOffersList(offersListByCity);
    setSelectedCity(city);
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
        <CitiesBlock offersList={offersList} selectedCity={selectedCity}/>
      </main>
    </div>
  );
}

export default MainPage;
