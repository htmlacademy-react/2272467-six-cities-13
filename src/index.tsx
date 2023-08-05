import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.tsx';
import { Provider } from 'react-redux';
import { offers } from './mocks/offers.ts';
import { store } from './store';
import { fetchOffers } from './store/api-actions/offers-api.ts';
import { checkAuthAction } from './store/api-actions/user-api.ts';

store.dispatch(fetchOffers());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={offers}
      />
    </Provider>
  </React.StrictMode>
);
