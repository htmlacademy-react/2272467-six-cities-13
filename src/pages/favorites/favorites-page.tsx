import React from 'react';
import { Helmet } from 'react-helmet-async';
import FavoritesList from '../../components/favorites-list/favorites-list.tsx';
import Footer from '../../components/footer/footer.tsx';

function FavoritesPage(): React.JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList/>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default FavoritesPage;
