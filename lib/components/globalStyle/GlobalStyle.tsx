import { css,Global } from '@emotion/react';

export const GlobalStyles = () => (
  <Global styles={css`
    @import url('https://fonts.googleapis.com/css2?family=Cookie&family=Manrope:wght@200..800&display=swap');

    @font-face {
      font-family: 'Manrope';
      font-style: normal;
      font-weight: 200 800;
      font-display: swap;
    }

    * {
        outline: none;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: none;
        font-family: "Manrope", serif;
    }
  `}/>
);
