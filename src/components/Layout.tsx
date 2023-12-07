import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  const location = useLocation();
  return (
    <>
      {
        location.pathname !== '/'
          && <Header />
      }
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
