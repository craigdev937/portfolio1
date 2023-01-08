import React from "react";
import "./Footer.css";

export const Footer = (): JSX.Element => {
    return (
        <React.Fragment>
            <footer className="footer">
                <a 
                    className="link footer__link"
                    href="https://github.com/craigdev937"
                    target="_blank"
                    rel="noreferrer"
                    >2023 Created by Craig Johnson
                </a>
            </footer>
        </React.Fragment>
    );
};


