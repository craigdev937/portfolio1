import React from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { ThemeContext } from "../../context/Theme";

export const Navbar = (): JSX.Element => {
    const { themeName, toggleTheme } = 
        React.useContext(ThemeContext);
    const [navList, setNavList] = React.useState(false);
    const toggleNavList = (): void => setNavList(!navList);

    return (
        <React.Fragment>
            <nav className="center nav">
            <ul style={{ display: navList ? "flex" : "" }}
                className="nav__list">
                <li className="nav__list-item">
                    <a
                        href="#projects"
                        className="link link--nav"
                        onClick={toggleNavList}
                    >Projects
                    </a>
                </li>

                <li className="nav__list-item">
                    <a 
                        className="link link--nav"
                        href="#skills" 
                        onClick={toggleNavList}
                        >Skills
                    </a>
                </li>

                <li className="nav__list-item">
                    <a 
                        className="link link--nav"
                        href="#contact"
                        onClick={toggleNavList}
                        >Contact
                    </a>
                </li>
            </ul>

            <button
                type="button"
                className="btn btn--icon nav__theme"
                aria-label="toggle theme"
                onClick={toggleTheme}
                >{themeName === "dark" ? <MdOutlineWbSunny /> : <FaMoon />}
            </button>

            <button
                type="button"
                className="btn btn--icon nav__hamburger"
                aria-label="toggle navigation"
                onClick={toggleNavList}
                >{navList ?  <GrClose /> : <GiHamburgerMenu />}
            </button>
        </nav>
        </React.Fragment>
    );
};

// const contact = {
//     // email is optional - 
//     // if left empty Contact section won't show up
//     email: "craigdev937@mail.com",
// };

// const projects = [
//     // projects can be added an removed.
//     {
//         name: "Project 1",
//         description:
//             `Amet asperiores et impedit aliquam consectetur? 
//             Voluptates sed a nulla ipsa officia et esse aliquam`,
//         stack: ["HTML", "CSS", "TypeScript", "React"],
//         sourceCode: "https://github.com",
//         livePreview: "https://github.com",
//     },
//     {
//         name: "Project 2",
//         description:
//             `Amet asperiores et impedit aliquam 
//             consectetur? Voluptates sed a nulla 
//             ipsa officia et esse aliquam`,
//         stack: ["SASS", "TypeScript", "React"],
//         sourceCode: "https://github.com",
//         livePreview: "https://github.com",
//     }
// ];

// const skills = [
//     // skills can be added or removed.
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "TypeScript",
//     "React",
//     "Redux Toolkit",
//     "Git",
//     "Jest",
// ];


