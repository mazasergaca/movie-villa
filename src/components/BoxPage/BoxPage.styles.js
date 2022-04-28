import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 50px 0;

  // css class mui item
  & .css-r93niq-MuiButtonBase-root-MuiPaginationItem-root {
    color: #fff;
  }
`;

export const Title = styled.h1`
  margin-bottom: 30px;

  font-size: 36px;
  text-align: center;
`;

export const Page = styled.p`
  margin-bottom: 15px;
  margin-left: 10px;

  font-size: 14px;
`;

export const List = styled.ul`
  margin-bottom: 40px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  /* margin: 5px; */

  &:not(:nth-child(5n)) {
    margin-right: 10px;
  }

  &:nth-last-child(n + 6) {
    margin-bottom: 20px;
  }

  width: calc((100% - 40px) / 5);
`;

export const WrapperPagination = styled.div`
  display: flex;
  justify-content: center;
`;
