import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderStyled = styled.header`
  padding: 5px 0;

  border-bottom: 1px solid #ccc;
  background-color: #040914;
`;

export const Wrapper = styled.div`
  display: flex;
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

export const WrapperLinks = styled.div`
  margin-left: 80px;
  display: flex;
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:not(:last-child) {
    margin-right: 35px;
  }
`;

export const LinkStyled = styled(Link)`
  font-size: 16px;

  color: #fff;
  transition: color 250ms;

  &:hover {
    color: #ff3b5f;
  }
`;
