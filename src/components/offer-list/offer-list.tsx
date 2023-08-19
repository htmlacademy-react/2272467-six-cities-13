import React from 'react';
import { TOffer } from '../../types/offers.ts';
import OfferCard from '../offer-card/offer-card.tsx';
import cn from 'classnames';

type TOfferListProps = {
  offers: TOffer[];
  page: 'main' | 'offer';
}

function OfferList({ offers, page }: TOfferListProps): React.JSX.Element {
  return (
    <div className={cn(
      'places__list',
      { 'near-places__list': page === 'offer' },
      { 'cities__places-list tabs__content': page === 'main' }
    )}
    >
      {
        offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} block={page === 'main' ? 'cities' : 'near'}/>)
        )
      }
    </div>
  );
}

export default OfferList;
