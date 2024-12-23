import { createGlobalStyle } from "styled-components";
import OpenSans from "../assets/fonts/open-sans/open-sans.woff2";

export const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: 400;
        src: url(${OpenSans}); 
    }
`;

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }

    html {
        background-color: ${(props) => props.theme.palette.backgroundDark};
    }
`;
