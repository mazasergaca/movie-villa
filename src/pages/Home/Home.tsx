import React from 'react';

import Hero from 'components/Hero';
import BoxMovie from 'components/BoxMovie';
import Footer from 'components/Footer';

const arr = [
  '#98b1cb',
  '#68a3df',
  '#0cc964',
  '#b90bbc',
  '#a82400',
  '#e568d4',
  '#7f8890',
  '#f8ff32',
];

const Home = () => {
  return (
    <>
      <Hero />
      <BoxMovie movies={arr} title="Latest and trending" />
      <BoxMovie movies={arr} title="Bollywood" />
      <BoxMovie movies={arr} title="Hollywood" />
      <BoxMovie movies={arr} title="Web Series" />
      <BoxMovie movies={arr} title="Anime" />
      <BoxMovie movies={arr} title="TV shows" />
      <Footer />
    </>
  );
};

export default Home;
