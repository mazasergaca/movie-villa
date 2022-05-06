import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Container } from '@mui/material';

import { makeSlug } from '../../services/make-slug';
import ItemMovie from '../ItemMovie';
import {
  Wrapper,
  Title,
  Page,
  List,
  Item,
  WrapperPagination,
  ButtonPagination,
} from './BoxPage.styles';

interface BoxPageProps {
  title?: string;
  movies: any;
  handleClick: (numberPage: number) => void;
  page: number;
}

interface ItemI {
  id: number;
  original_title: string;
  original_name: string;
  poster_path: string;
  release_date: string;
  first_air_date: string;
}

const BoxPage: FC<BoxPageProps> = ({ title, movies, handleClick, page }) => {
  return (
    <Container>
      <Wrapper>
        {title && <Title>{title}</Title>}
        <Page>
          Page {page} of {movies?.data.total_pages}
        </Page>
        <List>
          {movies?.data.results.map(
            ({
              id,
              original_title,
              original_name,
              poster_path,
              release_date,
              first_air_date,
            }: ItemI) => (
              <Item key={id}>
                <Link
                  to={{
                    pathname: `/movies/all/${makeSlug(
                      original_title || original_name
                    )}-${id}`,
                  }}
                >
                  <ItemMovie
                    src={poster_path}
                    date={release_date || first_air_date}
                    name={original_title || original_name}
                  />
                </Link>
              </Item>
            )
          )}
        </List>
        <WrapperPagination>
          <Pagination
            count={movies?.data.total_pages}
            size="small"
            variant="outlined"
            shape="rounded"
            color="secondary"
            renderItem={(item: any) => (
              <PaginationItem
                component={ButtonPagination}
                {...item}
                onClick={() => handleClick(item.page)}
              />
            )}
            page={page}
          />
        </WrapperPagination>
      </Wrapper>
    </Container>
  );
};

export default BoxPage;
