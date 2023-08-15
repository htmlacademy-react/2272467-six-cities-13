import React, { memo } from 'react';
import { TOffer } from '../../types/offers.ts';
import OfferCard from '../offer-card/offer-card.tsx';
import cn from 'classnames';

type TOfferListProps = {
  offers: TOffer[];
  onSelectedOffer?: (id: string) => void;
  page: 'main' | 'offer';
}

function OfferList({ offers, onSelectedOffer, page }: TOfferListProps): React.JSX.Element {
  return (
    <div className={cn(
      'places__list',
      { 'near-places__list': page === 'offer' },
      { 'cities__places-list tabs__content': page === 'main' }
    )}
    >
      {
        offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} block={page === 'main' ? 'cities' : 'near'} onSelectedOffer={onSelectedOffer}/>)
        )
      }
    </div>
  );
}

export default memo(OfferList);
