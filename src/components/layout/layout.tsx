import React, { Fragment } from 'react';
import Header from '../header/header.tsx';
import { Outlet } from 'react-router-dom';

function Layout(): React.JSX.Element {
  return (
    <Fragment>
      <Header typeView={'withNavigation'}/>
      <main>
        <Outlet/>
      </main>
    </Fragment>
  );
}

export default Layout;
