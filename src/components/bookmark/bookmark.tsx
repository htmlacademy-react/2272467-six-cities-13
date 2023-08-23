import { AuthorizationStatus } from '../../constants/authorization-status.ts';
import { AppRoute } from '../../constants/app-route.ts';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import {
  addFavorite,
  deleteFavorite,
} from '../../store/api-actions/favorites-offers-action.ts';
import { TOffer } from '../../types/offers.ts';

type TBookmarkProps = {
  id: TOffer['id'];
  isFavorite: boolean;
  cssClass: 'place-card' | 'offer';
}

function Bookmark({ id, isFavorite, cssClass }: TBookmarkProps): React.JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.user.authorizationStatus);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isFavoriteOffer, setIsFavoriteOffer] = useState(isFavorite);

  const handleChangeStatus = () => {
    if (!isFavoriteOffer) {
      dispatch(addFavorite({ id }));
    } else {
      dispatch(deleteFavorite({ id }));
    }
    setIsFavoriteOffer((prevState) => !prevState);
  };

  const getFavoriteStyles = () => {
    if (isFavoriteOffer) {
      return { fill: '#4481c3', stroke: '#4481c3' };
    }
  };

  return (
    <button
      className={`${cssClass}__bookmark-button button`}
      type="button"
      onClick={() => {
        if (authorizationStatus !== AuthorizationStatus.Auth) {
          navigate(AppRoute.Login);
        } else {
          handleChangeStatus();
        }
      }}
    >
      <svg className={`${cssClass}__bookmark-icon`}
        width={cssClass === 'place-card' ? 18 : 31}
        height={cssClass === 'place-card' ? 19 : 33}
        style={getFavoriteStyles()}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default Bookmark;
