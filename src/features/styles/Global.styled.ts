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

    h1{
        font-weight: 300;
        font-size: 96px;
        letter-spacing: -1.5px;
    }

    h2{
        font-weight: 300;
        font-size: 60;
        letter-spacing: -0.5px;
    }

    h3{
        font-weight: 400;
        font-size: 48px;
        letter-spacing: 0;
    }

    h4{
        font-weight: 400;
        font-size: 34px;
        letter-spacing: 0.25px;
    }

    h5{
        font-weight: 400;
        font-size: 24px;
        letter-spacing: 0;
    }

    h6{
        font-weight: 500;
        font-size: 20px;
        letter-spacing: 0.15px;
    }

    p{
        font-weight: 300;
        font-size: 16px;
        letter-spacing: 0.5px;
        color: #282424;
    }
`;

export default GlobalStyles;
