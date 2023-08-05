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
import { TOffer } from './types/offers.ts';
import { useAppSelector } from './hooks';

type AppMainProps = {
  offers: TOffer[];
}

function App({ offers }: AppMainProps): React.JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<Layout/>}>
            <Route index element={<MainPage/>}/>
            <Route path={`${AppRoute.Offer}/:id`} element={<OfferPage/>}/>
            <Route path={AppRoute.Favorites} element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
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
