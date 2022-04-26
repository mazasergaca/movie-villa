import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useMoviesByName } from 'api/hooks/useMoviesByName.ts';
import { Container } from '@mui/material';
import { AiOutlineSearch } from 'react-icons/ai';

import BoxPage from 'components/BoxPage';
import { Wrapper, Form, Label, Input, Button, InfoText } from './Movies.style';

const Movie = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search).get('query');
  const searchParamPage = new URLSearchParams(location.search).get('page');
  const [value, setValue] = useState(searchParam || '');
  const [page, setPage] = useState(Number(searchParamPage) || 1);

  const { moviesByName, refetch } = useMoviesByName(value, page);

  useEffect(() => {
    if (searchParam) {
      setValue(searchParam);
      refetch();
      window.scrollTo(0, 0);
    }
  }, [searchParam, refetch]);

  useEffect(() => {
    refetch();
    window.scrollTo(0, 0);
  }, [page, refetch]);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleClick = (page: number) => {
    setPage(page);
    navigation({ ...location, search: `query=${value}&page=${page}` });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) {
      toast.info('Please input text');
      return;
    }
    setPage(1);
    navigation({ ...location, search: `query=${value}&page=1` });
    refetch();
  };

  return (
    <Container>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Label>
            <Input
              placeholder="Search movies"
              value={value}
              onChange={handleChange}
            />
          </Label>
          <Button type="submit">
            <AiOutlineSearch color="#fff" size="24px" />
          </Button>
        </Form>
        <InfoText>
          {moviesByName?.data.total_results}{' '}
          {moviesByName?.data.total_results > 1 ? 'movies' : 'movie'} found for
          your query
        </InfoText>
        {moviesByName && (
          <BoxPage
            movies={moviesByName}
            page={page}
            handleClick={handleClick}
          />
        )}
      </Wrapper>
    </Container>
  );
};

export default Movie;
