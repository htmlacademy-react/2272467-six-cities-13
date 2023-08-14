import React, { Fragment } from 'react';
import Header from '../header/header.tsx';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function Layout(): React.JSX.Element {
  return (
    <Fragment>
      <Header typeView={'withNavigation'}/>
      <main>
        <ToastContainer/>
        <Outlet/>
      </main>
    </Fragment>
  );
}

export default Layout;
