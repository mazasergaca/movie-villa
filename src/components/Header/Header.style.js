import styled from 'styled-components';

export const HeaderStyled = styled.header`
  padding: 5px 0;

  background-color: #040914;

  & .btn-primary.dropdown-toggle:focus {
    box-shadow: none;
  }
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
