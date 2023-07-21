import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.tsx';
import { offers } from './mocks/offers.ts';
import { city } from './mocks/city.ts';
import { reviews } from './mocks/reviews.ts';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offers={offers}
      city={city}
      reviews={reviews}
    />
  </React.StrictMode>
);
