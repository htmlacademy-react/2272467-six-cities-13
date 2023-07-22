import React from 'react';
import { cities } from '../../constants/city.ts';
import { TCity } from '../../types/offers.ts';


type CitiesListProps = {
  onSelectedCity: (city: TCity) => void;
}

function CitiesList({ onSelectedCity }: CitiesListProps): React.JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li key={city.id} className="locations__item">
          <a className="locations__item-link tabs__item" href="#" onClick={()=> onSelectedCity(city)}>
            <span>{city.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default CitiesList;
