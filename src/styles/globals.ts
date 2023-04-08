import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   :root {
    font-size: 62.5%; // 1rem = 10px
    --white: #FFFFFF;
    --dark-white: #777777;
    --black: #000;
    --blue: #7695EC;
    --light-blue: #7f8fff;
    --dark-blue: #4f649f;
    --gray: #999999;
    --red: #FF5151;
    --light-red: #ff6851;
    --dark-red: #b23838;
    --green: #47B960;
    --light-green: #61ff84;
    --dark-green: #296c38;
  }

   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme?.background};
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