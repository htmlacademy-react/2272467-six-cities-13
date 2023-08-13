import React, { useEffect, useState } from 'react';
import { SortDescription } from '../../constants/sort-description.ts';
import { TSorting } from '../../types/sorting.ts';
import { useAppDispatch } from '../../hooks';
import { setCurrentSorting } from '../../store/current-sorting/current-sorting-slices.ts';

type TSortingForm = {
  selectedSorting: TSorting;
}

function SortingForm({ selectedSorting }: TSortingForm): React.JSX.Element {
  const dispatch = useAppDispatch();
  const [isOpened, setIsOpened] = useState(false);

  const iconStyle = {
    transform: `translateY(-50%) ${isOpened ? 'rotate(180deg)' : ''}`
  };

  function handleTypeClick() {
    setIsOpened((prevIsOpened) => !prevIsOpened);
  }

  useEffect(() => {
    document.body.addEventListener('click', () => {
      setIsOpened(false);
    });
  }, []);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={(e) => {
        e.stopPropagation();
        handleTypeClick();
      }}
      >
        {selectedSorting}
        <svg className="places__sorting-arrow" width={7} height={4} style={iconStyle}>
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : ''}`}>
        {Object.entries(SortDescription).map(([type,value]) => (
          <li key={type} onClick={(e) => {
            e.stopPropagation();
            dispatch(setCurrentSorting(type as TSorting));
          }}
          className={`places__option ${selectedSorting === type ? 'places__option--active' : ''}`}
          tabIndex={0}
          >{value}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortingForm;
