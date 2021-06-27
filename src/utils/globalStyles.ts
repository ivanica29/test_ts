import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  
  h5 {
    font-weight: bold;
    font-size: 18px;
  }
  
  h6 {
    font-size: 16px;
    font-weight: bold;
  }
  
  @media (max-width: 576px) {
    p {
      font-size: 12px;
    }
    h5 {
      font-size: 16px;
    }
  }
`;
