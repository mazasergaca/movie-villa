import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 80px 0;

  /* background-color: #333; */
`;

export const Form = styled.form`
  margin-bottom: 10px;
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
  margin-left: 5px;

  border: none;
  outline: none;
  color: #fff;
  background-color: transparent;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
`;

export const InfoText = styled.p`
  font-size: 18px;

  text-align: center;
`;

export const List = styled.ul`
  margin: -5px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  margin: 5px;

  width: calc((100% - 50px) / 5);
`;
