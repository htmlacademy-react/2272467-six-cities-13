import React from 'react';
import { useAppDispatch } from '../../hooks';
import { City } from '../../constants/city.ts';
import { setCurrentCity } from '../../store/current-city/current-city-slices.ts';
import cn from 'classnames';
import { Link } from 'react-router-dom';


type TCitiesListProps = {
  selectedCity: City;
}

function CitiesList({ selectedCity }: TCitiesListProps): React.JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {Object.values(City).map((city) => (
        <li key={city} className="locations__item">
          <Link to={''} className={cn(
            'locations__item-link',
            { 'tabs__item--active': selectedCity === city },
            { 'tabs__item': selectedCity !== city }
          )}
          onClick={() => dispatch(setCurrentCity(city))}
          >
            <span>{city}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CitiesList;
