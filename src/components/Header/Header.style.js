import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderStyled = styled.header`
  padding: 5px 0;

  background-color: #040914;

  & .btn-primary.dropdown-toggle:focus {
    box-shadow: none;
  }

  /* & .dropdown:hover .dropdown-menu {
    display: block;
    margin-top: 0; // remove the gap so it doesn't close
  } */
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const List = styled.ul`
  margin: 0 0 0 59px;

  display: flex;
  align-items: center;

  font-size: 14px;
  font-family: 'Roboto';
  line-height: 1.14;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-right: 27px;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  position: relative;
  &::after {
    position: absolute;
    top: 100%;
    content: '';
    display: block;
    height: 1px;
    width: 110%;

    background-color: #fff;
  }
`;

export const Input = styled.input`
  font-size: 16px;

  border: none;
  color: #fff;
  background-color: transparent;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #ccc;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const dropdownStyles = {
  backgroundColor: 'transparent',
  border: 'none',
};

export const WrapperLinks = styled.div`
  padding: 0 30px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const LinkStyled = styled(Link)`
  font-size: 16px;

  color: #000;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
