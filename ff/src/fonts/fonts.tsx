import { createGlobalStyle } from "styled-components";
import matrixFont from "./matrixFont.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'matrixFont';
        src: local('matrixFont'),
        url(${matrixFont}) format('truetype');
        font-style: normal;
    }
`;
