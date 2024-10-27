'use client'
import StyledComponentsRegistry from "@/lib/registry";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from "react-toastify";
import GlobalStyle from "@/styles/globalStyle";
import { Header } from "@/components/Header";
import { Container } from "react-bootstrap";
import { MyFooter } from "@/components/MyFooter";
import Button from "@/components/Button";

export default function RootLayout({children}) {

    return (
        <html lang="en">
        <head>
            <link rel="icon" type="image/png" href="/images/static/fav.png"/>
            <meta content="#000000" name="theme-color"/>
        </head>
        <body>
        <StyledComponentsRegistry>
            <GlobalStyle/>
            <ToastContainer />
            <div id="main-root">
                <Container>
                    <Header />
                </Container>
                {children}
                <MyFooter />          
            </div>
        </StyledComponentsRegistry>
        </body>
        </html>
    );
}
