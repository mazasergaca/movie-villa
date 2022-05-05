import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 60px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 90px 0;
  }
  @media screen and (min-width: 1280px) {
    padding: 130px 0;
  }
`;

export const List = styled.ul`
  margin-bottom: 22px;

  display: flex;

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 36px;
  }
`;

export const Item = styled.li`
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  &:not(:last-child) {
    margin-right: 15px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    &:not(:last-child) {
      margin-right: 38px;
    }
  }
  @media screen and (min-width: 1280px) {
    font-size: 18px;
    &:not(:last-child) {
      margin-right: 48px;
    }
  }
`;
export const Link = styled.a`
  color: #fff;
  transition: color 250ms;

  &:hover {
    color: #ff3b5f;
  }
`;

export const Text = styled.span`
  font-weight: 700;
  font-size: 14px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`;
