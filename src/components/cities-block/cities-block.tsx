import React, { useState } from 'react';
import SortForm from '../sort-form/sort-form.tsx';
import OfferList from '../offer-list/offer-list.tsx';
import Map from '../map/map.tsx';
import { TCity, TOffer, TOffers } from '../../types/offers.ts';

type citiesBlockProps = {
  offersList: TOffers;
  selectedCity: TCity;
}

function CitiesBlock({ offersList, selectedCity }: citiesBlockProps): React.JSX.Element {
  const [
    selectedOffer,
    setSelectedOffer
  ] = useState<Pick<TOffer, 'id'> | undefined>(undefined);

  function handleSelectedOffer(id: string) {
    if (selectedOffer?.id !== id) {
      setSelectedOffer({ id });
    }
  }

  return (
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
  );
}

export default CitiesBlock;
