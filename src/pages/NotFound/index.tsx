import React, { FC } from 'react';

import { Wrapper, Title, Text } from './NotFound.styles';

const NotFound: FC = () => {
  return (
    <Wrapper>
      <Text>404</Text>
      <Title>Page not found</Title>
    </Wrapper>
  );
};

export default NotFound;
