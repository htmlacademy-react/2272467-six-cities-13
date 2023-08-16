import { Link } from 'react-router-dom';
import OfferCard from '../offer-card/offer-card.tsx';
import React from 'react';
import { City } from '../../constants/city.ts';
import { TOffer } from '../../types/offers.ts';

type TFavoritesListByCityProps = {
  city: City;
  favoritesOffers: TOffer[];
}

function FavoritesListByCity({ city, favoritesOffers }: TFavoritesListByCityProps): React.JSX.Element {
  return (
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
  );
}

export default FavoritesListByCity;
