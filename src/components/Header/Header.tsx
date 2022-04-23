import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import { Dropdown } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';

import logo from 'assets/logo.svg';

import {
  HeaderStyled,
  Wrapper,
  List,
  Item,
  Form,
  Label,
  Input,
  Button,
  dropdownStyles,
} from './Header.style';

const Header = () => {
  return (
    <HeaderStyled>
      <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Wrapper>
          <Link to="/">
            <img src={logo} alt="logo" width="48" />
          </Link>
          <List>
            <Item>
              <Dropdown>
                <Dropdown.Toggle style={dropdownStyles}>Movies</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Trending</Dropdown.Item>
                  <Dropdown.Item href="#">Popular</Dropdown.Item>
                  <Dropdown.Item href="#">Top rated</Dropdown.Item>
                  <Dropdown.Item href="#">Upcoming</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Item>
            <Item>
              <Dropdown>
                <Dropdown.Toggle style={dropdownStyles}>
                  Tv Show
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Item>
            <Item>
              <Dropdown>
                <Dropdown.Toggle style={dropdownStyles}>Genres</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Item>
            <Item>
              <Dropdown>
                <Dropdown.Toggle style={dropdownStyles}>
                  Web series
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Item>
            <Item>
              <Dropdown>
                <Dropdown.Toggle style={dropdownStyles}>Anime</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Item>
          </List>
        </Wrapper>
        <Form>
          <Label>
            <Input placeholder="Search" />
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
