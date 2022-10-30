import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    color: ${({ theme }) => theme.color.BLACK};
  }
  
  html,
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  button {
    border: 0;
    padding: 0;
    cursor: pointer;
  }

  a,
  a:visited {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
