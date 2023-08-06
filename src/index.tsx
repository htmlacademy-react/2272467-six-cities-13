import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.tsx';
import { Provider } from 'react-redux';
import { store } from './store';
import ErrorMessage from './components/error-message/error-message.tsx';
import { fetchOffers } from './store/api-actions/offers-action.ts';
import { checkAuthAction } from './store/api-actions/user-action.ts';

store.dispatch(fetchOffers());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage/>
      <App/>
    </Provider>
  </React.StrictMode>
);
