import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Global } from 'styles/global';
import Header from 'components/Header';

const Home = lazy(() => import('./pages/Home'));
const Movie = lazy(() => import('./pages/Movies'));

export const App = () => {
  return (
    <>
      <Global />
      <Header />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
};
