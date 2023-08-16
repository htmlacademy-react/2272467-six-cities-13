import React from 'react';
import { City } from '../../constants/city.ts';
import { TOffer } from '../../types/offers.ts';
import FavoritesListByCity from '../favorites-list-by-city/favorites-list-by-city.tsx';

type TFavoritesListProps = {
  favoritesOffers: TOffer[];
}

function FavoritesList({ favoritesOffers }: TFavoritesListProps): React.JSX.Element {
  return (
    <ul className="favorites__list">
      {Object.values(City).map((city) => (
        <FavoritesListByCity key={city} city={city} favoritesOffers={favoritesOffers}/>
      ))}
    </ul>
  );
}

export default FavoritesList;
