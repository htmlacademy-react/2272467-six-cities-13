import React from 'react';
import { cities } from '../../constants/city.ts';


function CitiesList(): React.JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li key={crypto.randomUUID()} className="locations__item">
          <a className="locations__item-link tabs__item" href="#">
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default CitiesList;
