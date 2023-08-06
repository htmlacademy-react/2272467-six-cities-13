import React, { useEffect } from 'react';
import OfferList from '../offer-list/offer-list.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { TOffer } from '../../types/offers.ts';
import { fetchNearOffer } from '../../store/api-actions/offers-action.ts';


type nearOfferBlockProps = {
  id: Pick<TOffer, 'id'> | undefined;
}

function NearOffersBlock({ id }: nearOfferBlockProps): React.JSX.Element {
  const dispatch = useAppDispatch();

  const nearOffers = useAppSelector((state) => state.nearOffers);

  useEffect(() => {
    if (id) {
      dispatch(fetchNearOffer({ id }));
    }
  }, [dispatch, id]);

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
