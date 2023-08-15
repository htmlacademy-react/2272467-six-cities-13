import React, { useEffect } from 'react';
import OfferCard from '../offer-card/offer-card.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoritesOffers } from '../../store/api-actions/favorites-offers-action.ts';
import { getFavoritesOffers } from '../../store/favorites-offers/favorites-offers-selector.ts';
import { City } from '../../constants/city.ts';
import { Link } from 'react-router-dom';

function FavoritesList(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const favoritesOffers = useAppSelector(getFavoritesOffers);

  useEffect(() => {
    dispatch(fetchFavoritesOffers());
  }, [dispatch]);

  return (
    <ul className="favorites__list">
      {Object.values(City).map((city) => (
        <li key={city} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link to={''} className="locations__item-link">
                <span>{city}</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">
            {favoritesOffers.filter((offer) => offer.city.name === city).map((offer) => <OfferCard offer={offer} block={'favorite'} key={offer.id}/>)}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FavoritesList;
