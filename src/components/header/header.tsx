import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants/app-route.ts';
import Logo from '../logo/logo.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../constants/authorization-status.ts';
import { logoutAction } from '../../store/api-actions/user-action.ts';
import { getAuthorizationStatus, getUser } from '../../store/user/user-selectors.ts';
import { getFavoritesOffers } from '../../store/favorites-offers/favorites-offers-selectors.ts';

type THeaderProps = {
  typeView: 'withNavigation' | 'withoutNavigation';
}

function Header({ typeView }: THeaderProps): React.JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUser);
  const favoritesOffers = useAppSelector(getFavoritesOffers);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo block={'header'}/>
          </div>
          {typeView === 'withNavigation' &&
            <nav className="header__nav">
              <ul className="header__nav-list">
                {authorizationStatus === AuthorizationStatus.Auth && user &&
                  <li className="header__nav-item user">
                    <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__user-name user__name">{user.email}</span>
                      <span className="header__favorite-count">{favoritesOffers.length}</span>
                    </Link>
                  </li>}
                <li className="header__nav-item">
                  {authorizationStatus === AuthorizationStatus.Auth
                    ?
                    <Link to={'#'} className="header__nav-link header__nav-link--profile">
                      <span className="header__signout" onClick={(e) => {
                        e.preventDefault();
                        dispatch(logoutAction());
                      }}
                      >Sign out
                      </span>
                    </Link>
                    :
                    <Link to={AppRoute.Login} className="header__nav-link header__nav-link--profile">
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__login">Sign in</span>
                    </Link>}
                </li>
              </ul>
            </nav>}
        </div>
      </div>
    </header>
  );
}

export default Header;
