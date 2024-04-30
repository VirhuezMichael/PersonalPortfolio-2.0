import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    max-width: 1000px;
    margin: auto;
    text-align: center;
  }

  body {
    background: linear-gradient(135deg, #9aaad6, #eef4fc);
  }

  a {
    text-decoration: none;
    color: #333;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  a:hover {
    color: #1abc9c;
  }
`;

export default GlobalStyle;
