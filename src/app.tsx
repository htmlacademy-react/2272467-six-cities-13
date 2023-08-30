import React from 'react';
import MainPage from './pages/main/main-page.tsx';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './components/not-found/not-found-page.tsx';
import OfferPage from './pages/offer/offer-page.tsx';
import LoginPage from './pages/login/login-page.tsx';
import FavoritesPage from './pages/favorites/favorites-page.tsx';
import PrivateRoute from './components/private-route/private-route.tsx';
import { AppRoute } from './constants/app-route.ts';
import Layout from './components/layout/layout.tsx';
import { HelmetProvider } from 'react-helmet-async';
import { useAppSelector } from './hooks';
import 'react-toastify/dist/ReactToastify.css';
import { AuthorizationStatus } from './constants/authorization-status.ts';
import Preloader from './components/preloader/preloader.tsx';
import browserHistory from './utils/browser-histore.ts';
import HistoryRouter from './components/history-router/history-router.tsx';
import { getAuthorizationStatus } from './store/user/user-selectors.ts';


function App(): React.JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <Preloader/>;
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Main} element={<Layout/>}>
            <Route index element={<MainPage/>}/>
            <Route path={`${AppRoute.Offer}/:id`} element={<OfferPage/>}/>
            <Route path={AppRoute.Favorites} element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <FavoritesPage/>
              </PrivateRoute>
            }
            >
            </Route>
          </Route>
          <Route path={AppRoute.Login} element={<LoginPage/>}/>
          <Route path={AppRoute.NotFound} element={<NotFoundPage/>}/>
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
