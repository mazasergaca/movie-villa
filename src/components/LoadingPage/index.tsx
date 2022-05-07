import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { ThreeDots } from 'react-loader-spinner';

import { Container, Wrapper } from './LoadingPage.style';

const LoadingPage = () => {
  return (
    <Container>
      <LinearProgress color="inherit" />
      <Wrapper>
        <ThreeDots color="#fff" />
      </Wrapper>
    </Container>
  );
};

export default LoadingPage;
