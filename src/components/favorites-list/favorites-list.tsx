import React, { useEffect } from 'react';
import OfferCard from '../offer-card/offer-card.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoritesOffers } from '../../store/api-actions/favorites-offers.ts';

function FavoritesList(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const favoritesOffers = useAppSelector((state) => state.favoritesOffers);

  useEffect(() => {
    dispatch(fetchFavoritesOffers());
  }, [dispatch]);

  return (
    <ul className="favorites__list">
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {favoritesOffers.map((offer) => <OfferCard key={offer.id} offer={offer} block={'favorite'}/>)}
        </div>
      </li>
    </ul>
  );
}

export default FavoritesList;
