import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 50px 0;

  @media screen and (min-width: 768px) {
    margin: 80px 0;
  }
`;

export const Form = styled.form`
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    width: 250px;
    margin: 0 auto 20px;
  }
`;

export const Label = styled.label`
  position: relative;

  font-size: 22px;

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
  font-size: 18px;

  border: none;
  outline: none;
  color: #fff;
  background-color: transparent;

  &::placeholder {
    color: #ccc;
  }
`;

export const Button = styled.button`
  font-size: 22px;

  border: none;
  color: #fff;
  background-color: transparent;
  cursor: pointer;
  transform: scale(1);
  transition: color 250ms, transform 250ms;

  &:hover {
    color: #ff3b5f;
    transform: scale(1.1);
  }
`;

export const InfoText = styled.p`
  font-size: 18px;

  text-align: center;
`;

export const List = styled.ul`
  margin: -5px;
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  margin: 5px;

  width: calc((100% - 50px) / 5);
`;
