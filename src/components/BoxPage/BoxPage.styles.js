import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 30px 0;

  // css class mui item
  & .css-r93niq-MuiButtonBase-root-MuiPaginationItem-root {
    color: #fff;
  }
  @media screen and (min-width: 768px) {
    padding: 40px 0;
  }
  @media screen and (min-width: 768px) {
    padding: 50px 0;
  }
`;

export const Title = styled.h1`
  margin-bottom: 20px;

  font-size: 30px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 34px;
  }
  @media screen and (min-width: 768px) {
    font-size: 36px;
    margin-bottom: 30px;
  }
`;

export const Page = styled.p`
  margin-bottom: 10px;
  margin-left: 5px;

  font-size: 14px;
  @media screen and (min-width: 768px) {
    margin-bottom: 15px;
    margin-left: 10px;
  }
`;

export const List = styled.ul`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const Item = styled.li`
  @media screen and (max-width: 767px) {
    &:not(:nth-child(3n)) {
      margin-right: 5px;
    }

    &:nth-last-child(n + 3) {
      margin-bottom: 20px;
    }

    width: calc((100% - 10px) / 2);
  }

  @media screen and (min-width: 768px) {
    width: calc((100% - 15px) / 4);
  }
  @media screen and (min-width: 1280px) {
    width: calc((100% - 40px) / 5);
    &:not(:nth-child(5n)) {
      margin-right: 10px;
    }

    &:nth-last-child(n + 6) {
      margin-bottom: 20px;
    }
  }
`;

export const WrapperPagination = styled.div`
  display: flex;
  justify-content: center;
`;
