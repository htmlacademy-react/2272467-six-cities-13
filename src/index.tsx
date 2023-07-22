import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.tsx';
import { offers } from './mocks/offers.ts';
import { reviews } from './mocks/reviews.ts';
import { cities } from './constants/city.ts';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offers={offers}
      cities={cities}
      reviews={reviews}
    />
  </React.StrictMode>
);
