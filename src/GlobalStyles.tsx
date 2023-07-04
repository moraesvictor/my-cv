import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    color: #ffff;
    background-color: #0A0A0A;
  }

  a {
    color: blue;
    text-decoration: none;
  }

  label {
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 1.334;
    letter-spacing: 0em;
  }

  /* Outros estilos globais aqui */
`;
