import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import { AiOutlineSearch } from 'react-icons/ai';

import logo from 'assets/logo.svg';

import {
  HeaderStyled,
  Wrapper,
  Form,
  Label,
  Input,
  Button,
  WrapperLinks,
  Item,
  LinkStyled,
} from './Header.styles';

const Header = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    navigation({
      ...location,
      pathname: '/movies',
      search: `query=${value}&page=1`,
    });

    setValue('');
  };

  return (
    <HeaderStyled>
      <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Wrapper>
          <Link to="/">
            <img src={logo} alt="logo" width="48" />
          </Link>
          <WrapperLinks>
            <Item>
              <LinkStyled to="movies/trending">Trending</LinkStyled>
            </Item>
            <Item>
              <LinkStyled to="movies/popular">Popular</LinkStyled>
            </Item>
            <Item>
              <LinkStyled to="movies/top_rated">Top rated</LinkStyled>
            </Item>
            <Item>
              <LinkStyled to="movies/upcoming">Upcoming</LinkStyled>
            </Item>
          </WrapperLinks>
        </Wrapper>
        <Form onSubmit={handleSubmit}>
          <Label>
            <Input placeholder="Search" onChange={handleChange} value={value} />
          </Label>
          <Button type="submit">
            <AiOutlineSearch color="#fff" size="20px" />
          </Button>
        </Form>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
