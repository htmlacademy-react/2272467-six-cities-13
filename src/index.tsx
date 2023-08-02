import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.tsx';
import {Provider} from 'react-redux';
import { offers } from './mocks/offers.ts';
import {store} from './store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App
        offers={offers}
      />
    </React.StrictMode>
  </Provider>
);
