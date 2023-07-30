import React from 'react';
import MainPage from './pages/main/main-page.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from './components/not-found/not-found-page.tsx';
import OfferPage from './pages/offer/offer-page.tsx';
import LoginPage from './pages/login/login-page.tsx';
import FavoritesPage from './pages/favorites/favorites-page.tsx';
import PrivateRoute from './components/private-route/private-route.tsx';
import { AppRoute } from './constants/app-route.ts';
import { AuthorizationStatus } from './constants/authorization-status.ts';
import Layout from './components/layout/layout.tsx';
import { HelmetProvider } from 'react-helmet-async';
import { TCity, TOffer } from './types/offers.ts';
import { TReview } from './types/review.ts';

type AppMainProps = {
  offers: TOffer[];
  cities: TCity[];
  reviews: TReview[];
}

function App({ offers, cities, reviews }: AppMainProps): React.JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<Layout/>}>
            <Route index element={<MainPage offers={offers} cities={cities}/>}/>
            <Route path={`${AppRoute.Offer}/:id`} element={<OfferPage reviews={reviews} offers={offers}/>}/>
            <Route path={AppRoute.Favorites} element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <FavoritesPage offers={offers}/>
              </PrivateRoute>
            }
            >
            </Route>
          </Route>
          <Route path={AppRoute.Login} element={<LoginPage/>}/>
          <Route path={AppRoute.NotFound} element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
