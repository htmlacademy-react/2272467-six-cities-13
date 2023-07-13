import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants/app-route.ts';

function NotFoundPage(): React.JSX.Element {
  return (
    <Fragment>
      <h1>404. Page not found</h1>
      <Link to={AppRoute.Main}> Go to main page</Link>
    </Fragment>
  );
}

export default NotFoundPage;
