import React, { ReactElement } from "react";
import Collapsible from "react-collapsible";
import { Link } from "gatsby";

import resume from "../../../data/resume.json";
import cv from "../../../data/cv.json";

const Extracurriculars = (): ReactElement => {
    const ecIds = resume.extracurriculars;
    const ecs = cv.extracurriculars.filter((ec) => {
        return ecIds.includes(ec.id);
    })


    return (
        <>
            <h2 className="section-title">
                Activities{` `}
                <span role="img" aria-label="Man running">
                    🏃‍♂️
                </span>
            </h2>
            <h5 className="section-redirect" style={{ fontStyle: "oblique" }}>
                Read more about ways {`I'm`} getting involved{" "}
                <Link to="/blog">here</Link>.
            </h5>
            <div className="section">
                {ecs.map((ec, i) => {
                    const character = ``;
                    const triggerTitle = (
                        <>
                            <div className="item"></div>
                            <h3 className="entry-title">
                                {ec.position} @ <i>{ec.organization}</i>{" "}
                                {character}
                            </h3>
                        </>
                    );
                    return (
                        <Collapsible
                            key={i}
                            trigger={triggerTitle}
                            transitionTime={300}
                            easing="ease-in-out"
                        >
                            <div className="entry" key={i}>
                                <h5>
                                    {ec.location}—{ec.startDate} to{" "}
                                    {ec.endDate}
                                </h5>
                                <ul className="description">
                                    {ec.highlights.map((bullet, i) => {
                                        return <li key={i}>{bullet}</li>;
                                    })}
                                </ul>
                                {/* TODO: remove guard when all ECs have skills */}
                                {ec.skills &&
                                    <div className="techstack">
                                    {ec.skills.map((skill, i) => {
                                        return (
                                            <div key={i} className="tech">
                                                {skill}
                                            </div>
                                        );
                                    })}
                                    </div>
                                }
                            </div>
                        </Collapsible>
                    );
                })}
            </div>
        </>
    );
};

export default Extracurriculars;
