import React from 'react';
import Pagination from '@mui/material/Pagination';
import slugify from 'slugify';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';

import ItemMovie from 'components/ItemMovie';
import {
  Wrapper,
  Title,
  Page,
  List,
  Item,
  WrapperPagination,
} from './BoxPage.style';

//make slug for pathname
const makeSlug = string => slugify(string, { lower: true });

const BoxPage = ({ title, movies, handleClick, page }) => {
  return (
    <Container>
      <Wrapper>
        <Title>{title}</Title>
        <Page>
          Page {movies?.data.page} of {movies?.data.total_pages}
        </Page>
        <List>
          {movies?.data.results.map(movie => (
            <Item key={movie.id}>
              <Link
                to={{
                  pathname: `/movies/all/${makeSlug(
                    movie.original_title || movie.original_name
                  )}-${movie.id}`,
                }}
              >
                <ItemMovie
                  src={movie.poster_path}
                  date={movie.release_date || movie.first_air_date}
                  name={movie.original_title || movie.original_name}
                />
              </Link>
            </Item>
          ))}
        </List>
        <WrapperPagination>
          <Pagination
            count={movies?.data.total_pages}
            variant="outlined"
            shape="rounded"
            color="primary"
            onChange={e => handleClick(Number(e.target.textContent))}
            page={page}
          />
        </WrapperPagination>
      </Wrapper>
    </Container>
  );
};

export default BoxPage;
