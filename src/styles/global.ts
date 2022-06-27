import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background:#18181B;
    font-size: 16px;
    color: #aaaaaa;
    font-family: Lato, Helvetica, sans-serif;

}`;
export default GlobalStyle;
