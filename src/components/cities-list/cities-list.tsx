import React from 'react';
import { cities } from '../../constants/city.ts';
import { TCity } from '../../types/offers.ts';


type TCitiesListProps = {
  onSelectedCity: (city: TCity) => void;
  selectedCity: TCity;
}

function CitiesList({ onSelectedCity, selectedCity }: TCitiesListProps): React.JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li key={city.id} className="locations__item">
          <a className={
            `locations__item-link ${selectedCity.name === city.name ? 'tabs__item--active' : 'tabs__item'}`
          }
          href="#"
          onClick={() => onSelectedCity(city)}
          >
            <span>{city.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default CitiesList;
