import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TOffer } from '../../types/offers.ts';
import FavoritesList from '../../components/favorites-list/favorites-list.tsx';
import Footer from '../../components/footer/footer.tsx';


type TFavoritesPageProps = {
  offers: TOffer[];
}

function FavoritesPage({ offers }: TFavoritesPageProps): React.JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList offers={offers}/>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default FavoritesPage;