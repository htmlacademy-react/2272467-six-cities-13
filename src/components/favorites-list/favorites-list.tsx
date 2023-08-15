import React from 'react';
import OfferCard from '../offer-card/offer-card.tsx';
import { City } from '../../constants/city.ts';
import { Link } from 'react-router-dom';
import { TOffer } from '../../types/offers.ts';

type TFavoritesListProps = {
  favoritesOffers: TOffer[];
}

function FavoritesList({ favoritesOffers }: TFavoritesListProps): React.JSX.Element {
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
            {favoritesOffers.filter((offer) => offer.city.name === city).map((offer) => (
              <OfferCard offer={offer} block={'favorite'} key={offer.id}/>))}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FavoritesList;
