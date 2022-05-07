import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';

import { Global } from 'styles/global';
import LoadingPage from 'components/LoadingPage';
import Header from 'components/Header';
import Footer from 'components/Footer';

const Home = lazy(() => import('./pages/Home'));
const Movie = lazy(() => import('./pages/Movies'));
const TrendingMovies = lazy(() => import('./pages/TrendingMovies'));
const PopularMovies = lazy(() => import('./pages/PopularMovies'));
const TopRatedMovies = lazy(() => import('./pages/TopRatedMovies'));
const UpcomingMovies = lazy(() => import('./pages/UpcomingMovies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const PersonDetails = lazy(() => import('./pages/PersonDetails'));
const NotFound = lazy(() => import('./pages/NotFound/index'));

export const App = () => {
  return (
    <>
      <Global />
      <Header />
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movie />} />
          <Route path="movies/all/:slag" element={<MovieDetails />} />
          <Route path="movies/trending" element={<TrendingMovies />} />
          <Route path="movies/popular" element={<PopularMovies />} />
          <Route path="movies/top_rated" element={<TopRatedMovies />} />
          <Route path="movies/upcoming" element={<UpcomingMovies />} />
          <Route path="movies/person/:slag" element={<PersonDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
      <ToastContainer />
    </>
  );
};
