import React, { useEffect } from 'react';
import OfferList from '../offer-list/offer-list.tsx';
import { getNearOffers } from '../../store/action.ts';
import { useAppDispatch, useAppSelector } from '../../hooks';

function NearOffersBlock(): React.JSX.Element {
  const dispatch = useAppDispatch();

  const nearOffers = useAppSelector((state) => state.nearOffers);

  useEffect(() => {
    dispatch(getNearOffers());
  }, [dispatch]);

  return (
    <section className="near-places places">
      <h2 className="near-places__title">
        Other places in the neighbourhood
      </h2>
      <OfferList offers={nearOffers} page={'offer'}/>
    </section>
  );
}

export default NearOffersBlock;
