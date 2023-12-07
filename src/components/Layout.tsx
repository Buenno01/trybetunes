import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  changedUser: boolean,
};

function Layout({ changedUser }:LayoutProps) {
  const location = useLocation();
  return (
    <>
      {
        location.pathname !== '/'
          && <Header changedUser={ changedUser } />
      }
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
