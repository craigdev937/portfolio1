import React from "react";
import "./About.css";
import { TfiGithub } from "react-icons/tfi";
import { FaDev } from "react-icons/fa";
import CV from "@public/Craig Johnson.pdf";

const about = {
    name: "Craig Johnson",
    role: "Web Developer",
    description:
        `I'm a web developer utilizing HTML, CSS, JavaScript, 
        and TypeScript to build responsive websites 
        with interactive features.  I love explorering oportunities, 
        creating new things, and connecting with others.`,
    social: {
        dev: "https://dev.to/craigdev937",
        github: "https://github.com",
    },
};

export const About = (): JSX.Element => {
    const { name, role, description, social } = about;
    return (
        <React.Fragment>
            <aside className="about center">
                {name && (
                    <h1>Hi, I'm <span 
                        className="about__name">{name}.</span>
                    </h1>
                )}

                {role && <h2 className="about__role">A {role}.</h2>}
                <p className="about__desc">{description && description}</p>

                <section className="about__contact center">
                    {CV && (
                        <a href={CV} download>
                            <span className="btn btn--outline">
                                Resume
                            </span>
                        </a>
                    )}

                    {social && (
                        <React.Fragment>
                            {social.github && (
                                <a 
                                    href={social.github} 
                                    className="link"
                                    aria-label="github"
                                    target="_blank"
                                    rel="noreferrer"
                                    ><TfiGithub className="github" />
                                </a>
                            )}

                            {social.dev && (
                                <a 
                                    href={social.dev} 
                                    className="link link__icon"
                                    aria-label="DEV"
                                    target="_blank"
                                    rel="noreferrer"
                                ><FaDev className="dev" />
                                </a>
                            )}
                        </React.Fragment>
                    )}
                </section>
            </aside>
        </React.Fragment>
    );
};


