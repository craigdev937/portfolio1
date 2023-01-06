import React from "react";
import "./Header.css";
import { Navbar } from "../navbar/Navbar";

export const Header = (): JSX.Element => {
    const { homepage, title } = header;

    return (
        <React.Fragment>
            <header className="header center">
                <h3>
                    {homepage ? (
                        <a href="#" className="link"
                            >{title}
                        </a>
                    ) : (
                        title
                    )}
                </h3>
                <Navbar />
            </header>
        </React.Fragment>
    );
};

const header = {
    homepage: "https://github.com/craigdev937",
    title: "CraigDev937",
};



