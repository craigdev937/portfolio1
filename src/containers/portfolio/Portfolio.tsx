import React from "react";
import "./Portfolio.css";
import { projects } from "../../data/projects";
import { Project } from "../project/Project";

export const Portfolio = (): JSX.Element => {
    return (
        <React.Fragment>
            <section id="projects" className="section projects">
                <h2 className="section__title">Projects</h2>
                <aside className="projects__grid">
                    {projects.map((project) => (
                        <Project 
                            key={project.id} 
                            project={project}
                        />
                    ))}
                </aside>
            </section>
        </React.Fragment>
    );
};


