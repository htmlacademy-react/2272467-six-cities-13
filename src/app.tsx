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


type AppMainProps = {
  rentOfferCount: number;
}

function App({ rentOfferCount }: AppMainProps): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage rentOfferCount={rentOfferCount}/>}/>
        <Route path={AppRoute.Offer} element={<OfferPage/>}>
          <Route path={`${AppRoute.Offer}/:id`}/>
        </Route>
        <Route path={AppRoute.Login} element={<LoginPage/>}/>
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NotAuth}>
            <FavoritesPage/>
          </PrivateRoute>
        }
        >
        </Route>
        <Route path={AppRoute.NotFound} element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
