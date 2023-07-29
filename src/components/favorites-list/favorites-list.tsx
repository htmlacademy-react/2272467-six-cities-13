import React from 'react';
import { TOffer } from '../../types/offers.ts';
import OfferCard from '../offer-card/offer-card.tsx';


type TFavoritesListProps = {
  offers: TOffer[];
}

function FavoritesList({ offers }: TFavoritesListProps): React.JSX.Element {
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
          {offers.map((item) => <OfferCard key={item.id} offer={item} block={'favorite'}/>)}
        </div>
      </li>
    </ul>
  );
}

export default FavoritesList;
