import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 130px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const List = styled.ul`
  margin-bottom: 36px;

  display: flex;
`;

export const Item = styled.li`
  font-weight: 700;
  font-size: 18px;
  &:not(:last-child) {
    margin-right: 48px;
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
  font-size: 18px;
`;
