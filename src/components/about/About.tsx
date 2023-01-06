import React from "react";
import "./About.css";
import { TfiGithub } from "react-icons/tfi";
import { BsLinkedin } from "react-icons/bs";

const about = {
    name: "Craig Johnson",
    role: "Web Developer",
    description:
        `I love connecting with people.  
        My passion for web development drives me to 
        succeed in developing new working relationships.`,
    resume: "https://example.com",
    social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
    },
};

export const About = (): JSX.Element => {
    const { name, role, description, resume, social } = about;
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
                    {resume && (
                        <a href={resume}>
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
                                    ><TfiGithub />
                                </a>
                            )}

                            {social.linkedin && (
                                <a 
                                    href={social.linkedin} 
                                    className="link link__icon"
                                    aria-label="linkedin"
                                    target="_blank"
                                    rel="noreferrer"
                                ><BsLinkedin />
                                </a>
                            )}
                        </React.Fragment>
                    )}
                </section>
            </aside>
        </React.Fragment>
    );
};


