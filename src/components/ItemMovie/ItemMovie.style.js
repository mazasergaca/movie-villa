import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Poster = styled.div`
  width: 200px;
  height: 280px;

  overflow: hidden;

  border-radius: 10px;
  background-color: #111;
`;

export const Date = styled.span`
  margin-top: 18px;

  font-weight: 700;

  color: #9ca3af;
`;

export const Name = styled.span`
  margin-top: 8px;

  font-weight: 700;
  font-size: 18px;
  text-align: center;

  color: #fff;
`;
