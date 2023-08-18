import cn from 'classnames';
import { AuthorizationStatus } from '../../constants/authorization-status.ts';
import { AppRoute } from '../../constants/app-route.ts';
import React, { memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import {
  addFavorite,
  deleteFavorite,
} from '../../store/api-actions/favorites-offers-action.ts';
import { TOffer } from '../../types/offers.ts';

type TBookmarkProps = {
  id: TOffer['id'];
  isFavoriteOffer: boolean;
  handleSetIsFavoriteOffer: () => void;
}

function Bookmark({ id, isFavoriteOffer, handleSetIsFavoriteOffer }: TBookmarkProps): React.JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.user.authorizationStatus);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleChangeStatus = () => {
    if (!isFavoriteOffer) {
      dispatch(addFavorite({ id }));
    } else {
      dispatch(deleteFavorite({ id }));
    }
    handleSetIsFavoriteOffer();
  };

  return (
    <button
      className={cn(
        'place-card__bookmark-button button',
        { 'place-card__bookmark-button--active': isFavoriteOffer })}
      type="button"
      onClick={() => {
        if (authorizationStatus !== AuthorizationStatus.Auth) {
          navigate(AppRoute.Login);
        } else {
          handleChangeStatus();
        }
      }}
    >
      <svg className="place-card__bookmark-icon" width={18} height={19}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}


const BookmarkMemo = memo(Bookmark);
export default BookmarkMemo;
