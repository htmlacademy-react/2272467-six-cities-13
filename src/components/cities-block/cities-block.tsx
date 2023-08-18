import React, { useCallback, useState } from 'react';
import OfferList from '../offer-list/offer-list.tsx';
import Map from '../map/map.tsx';
import { TOffer } from '../../types/offers.ts';
import { City } from '../../constants/city.ts';
import { sorting } from '../../utils/sorting.ts';
import SortingForm from '../sorting-form/sorting-form.tsx';
import { useAppSelector } from '../../hooks';
import { getCurrentSorting } from '../../store/current-sorting/current-sorting-selector.ts';
import cn from 'classnames';

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
  const selectedSorting = useAppSelector(getCurrentSorting);

  const handleSelectedOffer = useCallback((id: string | null) => {
    if (selectedOffer?.id !== id) {
      setSelectedOffer({ id });
    }
  }, []);

  const offersByCity = [...offers].filter((offer) => offer.city.name === selectedCity);
  const sortOffers = sorting[selectedSorting](offersByCity).map((offer) => offer);

  return (
    <div className="cities">
      <div className={cn(
        'cities__places-container container',
        { 'cities__places-container--empty': offerIsEmpty })}
      >
        {offerIsEmpty
          ?
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">We could not find any property available at the moment
                in {selectedCity}
              </p>
            </div>
          </section>
          :
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{sortOffers.length} places to stay in {selectedCity}</b>
            <SortingForm selectedSorting={selectedSorting}/>
            <OfferList offers={sortOffers} onSelectedOffer={handleSelectedOffer} page={'main'}/>
          </section>}
        <div className="cities__right-section">
          {offerIsEmpty ||
            <Map offers={sortOffers} selectedCity={selectedCity} selectedOffer={selectedOffer} page={'main'}/>}
        </div>
      </div>
    </div>
  );
}

export default CitiesBlock;
