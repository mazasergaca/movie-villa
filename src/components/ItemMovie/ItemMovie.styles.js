import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Poster = styled.div`
  position: relative;
  width: 200px;
  height: 280px;

  overflow: hidden;

  border-radius: 10px;
  background-color: #111;
`;

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: transparent;
  backdrop-filter: blur(0px);
  transition: backdrop-filter 250ms, color 250ms;

  &:hover {
    backdrop-filter: blur(4px);
    color: #fff;
  }
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
  transition: color 250ms;

  &:hover {
    color: #ff3b5f;
  }
`;
