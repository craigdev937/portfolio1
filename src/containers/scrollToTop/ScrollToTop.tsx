import React from "react";
import "./ScrollToTop.css";
import { FaAngleDoubleUp } from "react-icons/fa";
import { CgChevronDoubleUpO } from "react-icons/cg";

export const ScrollToTop = (): JSX.Element | null => {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const toggleVisibility = () => 
            window.pageYOffset > 200 ? setIsVisible(true) 
            : setIsVisible(false);
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener(
            "scroll", toggleVisibility
        );
    }, []);

    return isVisible ? (
        <React.Fragment>
            <main className="scroll-top">
                <a href="#top">
                    <FaAngleDoubleUp className="scrollUP" />
                </a>
            </main>
        </React.Fragment>
    ) : null;
};


