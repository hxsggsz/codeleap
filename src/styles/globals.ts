import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   :root {
    font-size: 62.5%; // 62.5% = 10px
    --white: #FFFFFF;
    --black: #000;
    --blue: #7695EC;
    --gray: #999999;
    --red: #FF5151;
    --green: #47B960;
    --dark-gray: #777777;
  }

   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    width: 100vw;
    /* scrollbar */
    &::-webkit-scrollbar {
      width: 7px;
      background: none;
      border: none;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--blue);
      border-radius: 4px;
    }         
  }
  
  html {
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    overflow-x: hidden;
  }

  h1, p, a {
    text-decoration: none;
  } 
`;