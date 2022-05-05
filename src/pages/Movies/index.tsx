import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useMoviesByName } from 'api/hooks/useMoviesByName';
import { Container } from '@mui/material';
import { AiOutlineSearch } from 'react-icons/ai';

import BoxPage from 'components/BoxPage';
import {
  Section,
  Wrapper,
  Form,
  Label,
  Input,
  Button,
  InfoText,
  WrapperInfo,
} from './Movies.styles';

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
  }, [searchParam, refetch, page]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = (page: number) => {
    setPage(page);
    navigation({ ...location, search: `query=${value}&page=${page}` });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
    <Section>
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
              <AiOutlineSearch />
            </Button>
          </Form>
          <InfoText>
            {moviesByName?.data.total_results}{' '}
            {moviesByName?.data.total_results > 1 ? 'movies' : 'movie'} found
            for your query
          </InfoText>
        </Wrapper>
        {moviesByName?.data.total_results > 0 ? (
          <>
            <BoxPage
              movies={moviesByName}
              page={page}
              handleClick={handleClick}
            />
          </>
        ) : (
          <WrapperInfo>
            <InfoText>Enter movie name</InfoText>
          </WrapperInfo>
        )}
      </Container>
    </Section>
  );
};

export default Movie;
