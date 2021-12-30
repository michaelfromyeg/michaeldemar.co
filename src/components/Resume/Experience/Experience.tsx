import React, { ReactElement } from "react";
import Collapsible from "react-collapsible";
import { Link } from "gatsby";

import resume from "../../../data/resume.json";

const Experience = (): ReactElement => {
    const experiences = resume.experience.list;

    return (
        <>
            <h2 className="section-title">
                Experience{` `}
                <span role="img" aria-label="Hacker man">
                    👨‍💻
                </span>
            </h2>
            <h5 className="section-redirect" style={{ fontStyle: "oblique" }}>
                Read about my experiences in-depth <Link to="/blog">here</Link>.
            </h5>
            <div className="section">
                {experiences.map((exp, i) => {
                    const character = ``;
                    const triggerTitle = (
                        <>
                            <div className="item"></div>
                            <h3 className="entry-title">
                                {exp.title} @ <i>{exp.company}</i> {character}
                            </h3>
                        </>
                    );
                    return (
                        <Collapsible
                            key={i}
                            trigger={triggerTitle}
                            transitionTime={200}
                            easing="ease-out"
                        >
                            <div className="entry" key={i}>
                                <h5>
                                    {exp.location}—{exp.startDate} to{" "}
                                    {exp.endDate}
                                </h5>
                                <ul>
                                    {exp.description.map((bullet, i) => {
                                        return <li key={i}>{bullet}</li>;
                                    })}
                                </ul>
                                <div className="techstack">
                                    {exp.technologies.map((tech, i) => {
                                        return (
                                            <div key={i} className="tech">
                                                {tech}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </Collapsible>
                    );
                })}
            </div>
        </>
    );
};

export default Experience;
