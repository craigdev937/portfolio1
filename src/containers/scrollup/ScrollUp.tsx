import React from "react";
import "./ScrollUp.css";
import { FaAngleDoubleUp } from "react-icons/fa";

export const ScrollUp = (): JSX.Element => {
    const [showScroll, setShowScroll] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.screenY > 300) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        });
    }, []);

    const scrollTop = (): void => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <React.Fragment>
            {showScroll && (
                <FaAngleDoubleUp 
                    className="top-btn-position"
                    onClick={scrollTop}
                />
            )}
        </React.Fragment>
    );
}


