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
        font-size: 96px;
        font-weight: 300;
        letter-spacing: -1.5px;
    }

    h2{
        font-size: 60px;
        font-weight: 300;
        letter-spacing: -0.5px;
    }

    h3{
        font-size: 48px;
        letter-spacing: 0px;
        font-weight: 400;
    }

    h4{
        font-weight: 400;
        font-size: 34px;
        letter-spacing: 0.25px;
    }

    h5{
        font-weight: 400;
        font-size: 24px;
        letter-spacing: 0px;
    }

    h6{
        font-weight: 500;
        font-size: 14px;
        letter-spacing: 0.15px;
    }

    p{
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.5px;
        line-height: 24px;
        color: ${({ theme }) => theme.colors.gray};
    }

    svg{
        width: 25px;
        height: 25px;
    }
`;

export default GlobalStyles;
