import React, { useState, SyntheticEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container } from '@mui/material';
import { AiOutlineSearch } from 'react-icons/ai';

import logo from 'assets/logo.svg';

import {
  HeaderStyled,
  Wrapper,
  WrapperNav,
  LogoLink,
  Form,
  Label,
  Input,
  ButtonSubmit,
  WrapperLinks,
  Item,
  LinkStyled,
  ButtonMenu,
  CloseButton,
  MenuOpen,
  MobileMenu,
  WrapperMobileLinks,
  MobileLink,
} from './Header.styles';

const Header = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClickButtonMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  console.log(location);

  const handleChange = (e: SyntheticEvent) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!value) {
      toast.info('Please input text');
      return;
    }
    navigation({
      ...location,
      pathname: '/movies',
      search: `query=${value}&page=1`,
    });

    setValue('');
  };

  return (
    <HeaderStyled>
      <Container style={{ minWidth: '320px' }}>
        <Wrapper>
          <ButtonMenu onClick={handleClickButtonMenu}>
            <CloseButton open={isMenuOpen} />
            <MenuOpen open={isMenuOpen} />
          </ButtonMenu>
          <MobileMenu open={isMenuOpen}>
            <WrapperMobileLinks>
              <MobileLink
                to="/"
                onClick={handleClickButtonMenu}
                current={location.pathname === '/'}
              >
                HOME
              </MobileLink>
              <MobileLink
                to="/movies"
                onClick={handleClickButtonMenu}
                current={location.pathname === '/movies'}
              >
                SEARCH
              </MobileLink>
              <MobileLink
                to="/movies/trending"
                onClick={handleClickButtonMenu}
                current={location.pathname === '/movies/trending'}
              >
                TRENDING
              </MobileLink>
              <MobileLink
                to="/movies/popular"
                onClick={handleClickButtonMenu}
                current={location.pathname === '/movies/popular'}
              >
                POPULAR
              </MobileLink>
              <MobileLink
                to="/movies/top_rated"
                onClick={handleClickButtonMenu}
                current={location.pathname === '/movies/top_rated'}
              >
                TOP RATED
              </MobileLink>
              <MobileLink
                to="/movies/upcoming"
                onClick={handleClickButtonMenu}
                current={location.pathname === '/movies/upcoming'}
              >
                UPCOMING
              </MobileLink>
            </WrapperMobileLinks>
          </MobileMenu>
          <WrapperNav>
            <LogoLink to="/">
              <img src={logo} alt="logo" width="48" />
            </LogoLink>
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
          </WrapperNav>
          <Form onSubmit={handleSubmit}>
            <Label>
              <Input
                placeholder="Search"
                onChange={handleChange}
                value={value}
              />
            </Label>
            <ButtonSubmit type="submit">
              <AiOutlineSearch />
            </ButtonSubmit>
          </Form>
        </Wrapper>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
