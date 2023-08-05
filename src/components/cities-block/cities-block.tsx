import React, { useState } from 'react';
import SortingForm from '../sorting-form/sorting-form.tsx';
import OfferList from '../offer-list/offer-list.tsx';
import Map from '../map/map.tsx';
import { TOffer } from '../../types/offers.ts';
import { City } from '../../constants/city.ts';
import { SortDescription } from '../../constants/sort-description.ts';
import { TSorting } from '../../types/sorting.ts';
import { sorting } from '../../utils/sorting.ts';

type citiesBlockProps = {
  offers: TOffer[];
  selectedCity: City;
  offerIsEmpty: boolean;
}

function CitiesBlock({ offers, selectedCity, offerIsEmpty }: citiesBlockProps): React.JSX.Element {
  const [
    selectedOffer,
    setSelectedOffer
  ] = useState<Pick<TOffer, 'id'> | undefined>(undefined);

  const [selectedSorting, setSelectedSorting] = useState<TSorting>(SortDescription.Popular);

  function handleSelectedOffer(id: string) {
    if (selectedOffer?.id !== id) {
      setSelectedOffer({ id });
    }
  }

  function handleSelectedSorting(sort: TSorting) {
    setSelectedSorting(sort);
  }

  const sortOffers = sorting[selectedSorting](offers).map((offer) => offer);

  return (
    <div className="cities">
      <div className={`cities__places-container container ${offerIsEmpty ? 'cities__places-container--empty' : ''}`}>
        {offerIsEmpty
          ? <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">We could not find any property available at the moment
                in {selectedCity}
              </p>
            </div>
          </section>
          : <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in {selectedCity}</b>
            <SortingForm selectedSorting={selectedSorting} handleSelectedSorting={handleSelectedSorting}/>
            <OfferList offers={sortOffers} onSelectedOffer={handleSelectedOffer} page={'main'}/>
          </section>}
        <div className="cities__right-section">
          {offerIsEmpty ||
            <Map offers={offers} selectedCity={selectedCity} selectedOffer={selectedOffer} page={'main'}/>}
        </div>
      </div>
    </div>
  );
}

export default CitiesBlock;
