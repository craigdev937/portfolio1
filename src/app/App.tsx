import React from "react";
import "./App.css";
import Sunrise from "@public/images/sunrise.jpg";

export const App = (): JSX.Element => {
    return (
        <React.Fragment>
            <h1>App</h1>
            <img 
                src={Sunrise} alt="Sunrise"
                height="500px" width="auto"
            />
        </React.Fragment>
    );
};


