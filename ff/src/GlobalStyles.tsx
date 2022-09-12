import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        background: black;
        height: 100%;
        overflow: hidden;
    }

    body {
        margin: 0;
        padding: 0;
        height: 100%;
    }
`;

export default GlobalStyle;
