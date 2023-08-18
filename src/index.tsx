import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.tsx';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthAction } from './store/api-actions/user-action.ts';

store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
