import styled, { createGlobalStyle } from 'styled-components';

// Define el GlobalStyle para los estilos globales
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  :root {
    --color-bg: ${props => props.theme.colors.bg};
    --color-bg-variant: ${props => props.theme.colors.bgVariant};
    --color-primary: ${props => props.theme.colors.primary};
    --color-primary-variant: ${props => props.theme.colors.primaryVariant};
    --color-white: ${props => props.theme.colors.white};
    --color-light: ${props => props.theme.colors.light};
    --transition: ${props => props.theme.transitions.default};
    --container-width-lg: ${props => props.theme.containerWidth.lg};
    --container-width-md: ${props => props.theme.containerWidth.md};
    --container-width-sm: ${props => props.theme.containerWidth.sm};
  }

  html {
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  body {
    font-family: ${props => props.theme.fonts.primary};
    background-color: var(--color-bg);
    color: var(--color-white);
    line-height: 1.7;
    background-image: url(../src/assets/bg-texture.png);
  }

  .container {
    width: var(--container-width-lg);
    margin: 0 auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
  }

  h1 {
    font-size: 2.5rem;
  }

  section {
    margin-top: 8rem;
  }

  section > h2,
  section > h5 {
    color: var(--color-light);
    text-align: center;
  }

  section > h2 {
    color: var(--color-primary);
    margin-bottom: 3rem;
  }

  .text-light {
    color: var(--color-primary);
  }

  a {
    transition: var(--transition);
    color: var(--color-primary);
  }

  a:hover {
    color: var(--color-white);
  }

  .btn {
    width: max-content;
    display: inline-block;
    color: var(--color-primary);
    padding: 0.75rem 1.2rem;
    border-radius: 0.4rem;
    cursor: pointer;
    border: 1px solid var(--color-primary);
    transition: var(--transition);
  }

  .btn:hover {
    background-color: var(--color-white);
    color: var(--color-bg);
    border-color: transparent;
  }

  .btn-primary {
    background-color: var(--color-primary);
    color: var(--color-bg);
  }

  img {
    display: block;
    width: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 1024px){
    .container {
      width: var(--container-width-md);
    }

    section {
      margin-top: 6rem;
    }
  }

  @media screen and (max-width: 600px){
    .container {
      width: var(--container-width-sm);
    }

    section > h2 {
      margin-bottom: 2rem;
    }
  }
`;

export default GlobalStyle;
