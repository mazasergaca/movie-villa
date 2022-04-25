import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useMoviesByName } from 'api/hooks/useMoviesByName.ts';
import { Container } from '@mui/material';
import { AiOutlineSearch } from 'react-icons/ai';

import ItemMovie from 'components/ItemMovie';
import {
  Wrapper,
  Form,
  Label,
  Input,
  Button,
  InfoText,
  List,
  Item,
} from './Movies.style';

const Movie = () => {
  const [value, setValue] = useState('');
  const { moviesByName, refetch } = useMoviesByName(value);

  const navigation = useNavigate();
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (searchParam) setValue(searchParam);
  }, [searchParam]);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) {
      toast.info('Please input text');
      return;
    }
    navigation({ ...location, search: `query=${value}` });
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
          <List>
            {moviesByName?.data.results.map(movie => (
              <Item key={movie.id}>
                <ItemMovie
                  src={movie.poster_path}
                  date={movie.release_date || movie.first_air_date}
                  name={movie.original_title || movie.original_name}
                />
              </Item>
            ))}
          </List>
        )}
      </Wrapper>
    </Container>
  );
};

export default Movie;
