import React, { useState } from 'react';
import SortForm from '../sort-form/sort-form.tsx';
import OfferList from '../offer-list/offer-list.tsx';
import Map from '../map/map.tsx';
import { TOffer } from '../../types/offers.ts';
import { City } from '../../constants/city.ts';

type citiesBlockProps = {
  offers: TOffer[];
  selectedCity: City;
}

function CitiesBlock({ offers, selectedCity }: citiesBlockProps): React.JSX.Element {
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
          <b className="places__found">{offers.length} places to stay in {selectedCity}</b>
          <SortForm/>
          <OfferList offers={offers} onSelectedOffer={handleSelectedOffer} page={'main'}/>
        </section>
        <div className="cities__right-section">
          <Map offers={offers} selectedCity={selectedCity} selectedOffer={selectedOffer} page={'main'}/>
        </div>
      </div>
    </div>
  );
}

export default CitiesBlock;
