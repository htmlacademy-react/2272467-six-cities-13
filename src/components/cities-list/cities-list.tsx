import React from 'react';
import { useAppDispatch } from '../../hooks';
import { setCurrentCity } from '../../store/action.ts';
import { City } from '../../constants/city.ts';


type TCitiesListProps = {
  selectedCity: City;
}

function CitiesList({ selectedCity }: TCitiesListProps): React.JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {Object.values(City).map((city) => (
        <li key={city} className="locations__item">
          <a className={
            `locations__item-link ${selectedCity === city ? 'tabs__item--active' : 'tabs__item'}`
          }
          href="#"
          onClick={() => dispatch(setCurrentCity(city))}
          >
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default CitiesList;
