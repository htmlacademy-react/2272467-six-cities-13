import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants/app-route.ts';
import styles from './not-found-page.module.css';

function NotFoundPage(): React.JSX.Element {
  return (
    <div className={`${styles.notFoundPage}`}>
      <h1 className={styles.title}>404. Page not found</h1>
      <Link to={AppRoute.Main} className={styles.text}> Go to <span>main page</span>.</Link>
    </div>
  );
}

export default NotFoundPage;
