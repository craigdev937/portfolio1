import React from "react";
import "./Project.css";
import { TfiGithub } from "react-icons/tfi";
import { GrLaunch } from "react-icons/gr";
import { IProject } from "../../models/Interfaces";
import { ScrollUp } from "../scrollup/ScrollUp";

type Props = {
    project: IProject
};

export const Project = ({project}: Props): JSX.Element => {
    return (
        <React.Fragment>
            <section className="project">
                <h3>{project.title}</h3>
                <p 
                    className="project__description"
                    >{project.description}
                </p>
                <img 
                    className="project__img"
                    alt={project.title}
                    src={project.img}
                />
                <p className="project__tech"
                    >{project.technology}
                </p>
                <a  
                    href={project.link}
                    aria-label="website"
                    target="_blank"
                    rel="noreferrer">
                        <GrLaunch
                            className="project__icon" 
                        />
                </a>
                <a 
                    href={project.github}
                    aria-label="github"
                    target="_blank"
                    rel="noreferrer">
                        <TfiGithub 
                            className="project__icon" 
                        />
                </a>
                <ScrollUp />
            </section>
        </React.Fragment>
    );
};


