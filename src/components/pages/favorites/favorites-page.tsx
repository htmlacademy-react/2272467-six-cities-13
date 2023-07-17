import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TOffers } from '../../../types/offers.ts';
import FavoritesList from '../../favorites-list/favorites-list.tsx';


type TFavoritesPageProps = {
  offers: TOffers;
}

function FavoritesPage({ offers }: TFavoritesPageProps): React.JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>Избранное</title>
      </Helmet>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList offers={offers}/>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;
