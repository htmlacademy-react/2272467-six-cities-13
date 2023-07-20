import React, { useState } from 'react';
import { TOffers } from '../../types/offers.ts';
import OfferCard from '../offer-card/offer-card.tsx';

type TOfferListProps = {
  offers: TOffers;
}

function OfferList({ offers }: TOfferListProps): React.JSX.Element {
  const [activated, setActivated] = useState(null);

  function handleAddActive(id: string) {
    setActivated(id);
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((item) => (
          <OfferCard key={item.id} offer={item} view={'horizontal'} onAddActive={() => handleAddActive(item.id)}/>)
        )
      }
    </div>
  );
}

export default OfferList;
