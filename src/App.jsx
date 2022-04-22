import React, { lazy, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Global } from 'styles/global';
import Header from 'components/Header';

const Home = lazy(() => import('./pages/Home'));

export const App = () => {
  return (
    <>
      <Global />
      <Header />
      <Suspense fallback={null}>
        <Home />
      </Suspense>
    </>
  );
};
