import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'DM Sans';
    font-size: 12px;
    line-height: 1.33;

    background-color: #040914;
    color: #fff;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  img {
    display: block;
  }
`;
