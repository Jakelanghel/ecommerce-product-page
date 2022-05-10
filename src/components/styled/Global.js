import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
    /* Primary  */
    --orange: hsl(26, 100%, 55%);
    --paleOrange: hsl(25, 100%, 94%);
    /* Neutral  */
    --veryDarkBlue: hsl(220, 13%, 13%);
    --darkGrayBlue: hsl(219, 9%, 45%);
    --greyishBlue: hsl(220, 14%, 75%);
    --lightGreyBlue: hsl(223, 64%, 98%);
    --white: hsl(0, 0%, 100%);
    --black: hsl(0, 0%, 0%); /* with 75% opacity for lightbox background */
    --lightBoxBkg: hsla(0, 0%, 0%, .75);
    --grey: #e8e8ea;
}

* {
    box-sizing: border-box;
    font-family: "Kumbh Sans", sans-serif;

  }

  body {
    font-size: 1.15em;
    margin: 0;
  }

  h1,
  h2,
  h3,
  p {
    margin: 0;
    padding: 0;
  }

  P {
    color: var(--darkGrayBlue);
  }

`;

export default GlobalStyles;
