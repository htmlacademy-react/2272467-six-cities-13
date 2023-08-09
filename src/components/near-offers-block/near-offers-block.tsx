import React from 'react';
import OfferList from '../offer-list/offer-list.tsx';
import { TOffer } from '../../types/offers.ts';


type nearOfferBlockProps = {
  nearOffers: TOffer[];
}

function NearOffersBlock({ nearOffers }: nearOfferBlockProps): React.JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">
        Other places in the neighbourhood
      </h2>
      <OfferList offers={nearOffers.slice(0, 3)} page={'offer'}/>
    </section>
  );
}

export default NearOffersBlock;
