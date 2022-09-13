import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
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
