import React from "react";

type Theme = {
    themeName: string,
    toggleTheme: () => void
};

const inititalState: Theme = {
    themeName: "",
    toggleTheme: Function
};

export const ThemeContext = 
    React.createContext<Theme>(inititalState);

type Props = {
    children: React.ReactNode
};

export const ThemeProvider = ({ children }: Props) => {
    const [themeName, setThemeName] = React.useState("light");

    React.useEffect(() => {
        const darkMediaQuery = window.matchMedia(
            "(prefers-color-scheme: light)"
        );
        setThemeName(darkMediaQuery.matches ? "dark" : "light")
        darkMediaQuery.addEventListener("change", (event) => {
            setThemeName(event.matches ? "dark" : "light");
        });
    }, []);

    const toggleTheme = (): void => {
        const name = themeName === "dark" ? "light" : "dark";
        localStorage.setItem("themeName", name);
        setThemeName(name);
    };

    return (
        <ThemeContext.Provider value={{ 
            themeName, toggleTheme 
        }}>
            { children }
        </ThemeContext.Provider>
    );
};



