import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        position: relative;
        font-family: "Roboto", sans-serif;
    }

    #root, html, body {
        width: 100%;
        height: 100%;
        font-size: 16px;
        background: ${({ theme }) => theme.colors.offWhite}
    }
`;

export default GlobalStyles;
