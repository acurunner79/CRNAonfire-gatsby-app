import React from "react";
import { createGlobalStyle } from "styled-components";
import Hamburger from "../Nav/Hamburger";
import TopNav from "../Nav/TopNav";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    width: 100vw;
    height: 100vh;
    text-align: center;
    background-color: black;
    margin: 0;
    overflow-x: hidden;
    font-family: 'Raleway', sans-serif;
}

a, ul{
    list-style: none;
    text-decoration: none;
}

h1{
    margin-top: 250px;
    color: white;
    font-size: 45px
}

h2{
    color: white;
    font-size: 40px;
    margin-top: 35px;
}
`


const Layout = ({ children }) => {
    return(
        <div>
            <GlobalStyle />
            <Hamburger />
            <TopNav />
            <section>{children}</section>
        </div>
    )
}

export default Layout