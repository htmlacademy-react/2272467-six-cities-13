import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import FavoritesList from '../../components/favorites-list/favorites-list.tsx';
import Footer from '../../components/footer/footer.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  getFavoritesOffers,
  getFavoritesOffersIsLoadingStatus
} from '../../store/favorites-offers/favorites-offers-selectors.ts';
import { fetchFavoritesOffers } from '../../store/api-actions/favorites-offers-action.ts';
import cn from 'classnames';
import Preloader from '../../components/preloader/preloader.tsx';

function FavoritesPage(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const favoritesOffers = useAppSelector(getFavoritesOffers);
  const isFavoritesOffersLoading = useAppSelector(getFavoritesOffersIsLoadingStatus);
  const favoritesOffersIsEmpty = favoritesOffers.length === 0;

  useEffect(() => {
    dispatch(fetchFavoritesOffers());
  }, [dispatch]);

  if (isFavoritesOffersLoading) {
    return <Preloader/>;
  }

  return (
    <div className="page">
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      <main className={cn(
        'page__main page__main--favorites',
        { 'page__main--favorites-empty': favoritesOffersIsEmpty }
      )}
      >
        <div className="page__favorites-container container">
          <section className={cn(
            'favorites',
            { 'favorites--empty': favoritesOffersIsEmpty }
          )}
          >
            {favoritesOffersIsEmpty
              ?
              <>
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan your future
                    trips.
                  </p>
                </div>
              </>
              :
              <>
                <h1 className="favorites__title">Saved listing</h1>
                <FavoritesList favoritesOffers={favoritesOffers}/>
              </>}
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default FavoritesPage;
