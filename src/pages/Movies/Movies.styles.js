import styled from 'styled-components';

export const Section = styled.section`
  margin-top: 40px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Form = styled.form`
  margin: 0 100px 0 0;

  @media screen and (max-width: 768px) {
    width: 250px;
    margin: 0 auto 20px;
  }
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
export const WrapperInfo = styled.div`
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
