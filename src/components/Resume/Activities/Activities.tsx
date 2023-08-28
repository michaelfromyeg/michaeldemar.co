import { Link } from "gatsby";
import React, { ReactElement } from "react";
import Collapsible from "react-collapsible";

import { formatDate } from "../../../utils/formatDate";

import cv from "../../../data/cv.json";
import resume from "../../../data/resume.json";

const Extracurriculars = (): ReactElement => {
    const ecIds = resume.volunteer;
    const ecs = cv.volunteer.filter((ec) => {
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
                                    {ec.location}—{formatDate(ec.startDate)} to{" "}
                                    {ec.endDate ? formatDate(ec.endDate) : "present"}
                                </h5>
                                <ul className="description">
                                    {ec.highlights.map((bullet, i) => {
                                        return <li key={i}>{bullet}</li>;
                                    })}
                                </ul>
                            </div>
                        </Collapsible>
                    );
                })}
            </div>
        </>
    );
};

export default Extracurriculars;
