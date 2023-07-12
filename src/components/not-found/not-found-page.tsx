import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage(): React.JSX.Element {
  return (
    <Fragment>
      <h1>404. Page not found</h1>
      <Link to={'/'}> Go to main page</Link>
    </Fragment>
  );
}

export default NotFoundPage;
