import React from 'react';
import MainPage from './components/pages/main/main-page.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from './components/not-found/not-found-page.tsx';
import OfferPage from './components/pages/offer/offer-page.tsx';
import LoginPage from './components/pages/login/login-page.tsx';
import FavoritesPage from './components/pages/favorites/favorites-page.tsx';
import PrivateRoute from './components/private-route/private-route.tsx';
import { AppRoute } from './constants/app-route.ts';
import { AuthorizationStatus } from './constants/authorization-status.ts';
import Layout from './components/layout/layout.tsx';
import { HelmetProvider } from 'react-helmet-async';
import { TOffers } from './types/offers.ts';

type AppMainProps = {
  offers: TOffers;
}

function App({ offers }: AppMainProps): React.JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<Layout/>}>
            <Route index element={<MainPage offers={offers}/>}/>
            <Route path={AppRoute.Offer} element={<OfferPage/>}>
              <Route path={`${AppRoute.Offer}/:id`}/>
            </Route>
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
