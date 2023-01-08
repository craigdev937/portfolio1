import React from "react";
import "./App.css";
import { About } from "../components/about/About";
import { Contact } from "../components/contact/Contact";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { Portfolio } from "../containers/portfolio/Portfolio";
import { ScrollUp } from "../containers/scrollup/ScrollUp";
import { ThemeContext } from "../context/Theme";

export const App = (): JSX.Element => {
    const { themeName } = React.useContext(ThemeContext);
    return (
        <section id="top" className={`${themeName} app`}>
            <React.Fragment>
                <Header />
                <section className="main">
                    <About />
                    <Portfolio />
                    <Contact />
                </section>
                <ScrollUp />
                <Footer />
            </React.Fragment>
        </section>
    );
};


