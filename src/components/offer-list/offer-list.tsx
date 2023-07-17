import React from 'react';
import { TOffers } from '../../types/offers.ts';
import OfferCard from '../offer-card/offer-card.tsx';

type TOfferListProps = {
  offers: TOffers;
}

function OfferList({ offers }: TOfferListProps): React.JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((item) => <OfferCard key={item.id} offer={item}/>)}
    </div>
  );
}

export default OfferList;
