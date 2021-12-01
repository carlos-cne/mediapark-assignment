import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding:0;
        margin:0;
        box-sizing: border-box;
        font-size: 16px;
    }

    body {
    font-family: 'Lato', sans-serif;
    }

    ul, li {
        list-style: none;
    }

    a {
        text-decoration: none ;
        color:inherit;
    }

    button {
        cursor: pointer;
    } 

`;
