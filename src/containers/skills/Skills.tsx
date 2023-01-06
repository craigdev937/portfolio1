import React from "react";
import "./Skills.css";
import { skills } from "../../data/projects";

export const Skills = (): JSX.Element => {
    return (
        <React.Fragment>
            <main id="skills" className="section skills">
                <h2 className="skills__title">Skills</h2>
                <ul className="skills__list">
                    {skills.map((skill, index) => (
                        <li 
                            className="skills__list-item 
                                btn btn--plain"    
                            key={index}
                            >{skill}
                        </li>
                    ))}
                </ul>
            </main>
        </React.Fragment>
    );
};


