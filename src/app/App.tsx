import React from "react";
import "./App.css";
import { About } from "../components/about/About";
import { Contact } from "../components/contact/Contact";
import { Header } from "../components/header/Header";
import { ThemeContext } from "../context/Theme";

export const App = (): JSX.Element => {
    const { themeName } = React.useContext(ThemeContext);
    return (
        <section id="top" className={`${themeName} app`}>
            <React.Fragment>
                <About />
                <Header />
                <Contact />
            </React.Fragment>
        </section>
    );
};


