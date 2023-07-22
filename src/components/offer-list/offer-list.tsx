import React from 'react';
import { TOffers } from '../../types/offers.ts';
import OfferCard from '../offer-card/offer-card.tsx';

type TOfferListProps = {
  offers: TOffers;
  onAddActive: (id: string) => void;
}

function OfferList({ offers, onAddActive }: TOfferListProps): React.JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} view={'horizontal'} onAddActive={onAddActive}/>)
        )
      }
    </div>
  );
}

export default OfferList;
