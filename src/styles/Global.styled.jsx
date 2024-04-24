import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
}

html {
    font-family: 'Poppins', sans-serif;
    font-size: 62.5%;
    scroll-behavior: smooth;
}
body {
    font-size: 1.6rem;
}
button {
    cursor: pointer;
    font-family: inherit;
}
ul {
    list-style: none;
    align-items: center;
}
a {
    text-decoration: none;
}
`;

export default GlobalStyles;
