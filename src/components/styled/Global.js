import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    h1,
    h2,
    h2,
    p {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Kumbh Sans', sans-serif;       
        margin: 0;
        background-color: ${({ theme }) => theme.colors.white};
    }


`;
