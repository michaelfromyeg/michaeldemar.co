import React, { ReactElement } from "react";
import Collapsible from "react-collapsible";
import { Link } from "gatsby";

import { formatDate } from "../../../utils/formatDate";

import resume from "../../../data/resume.json";
import cv from "../../../data/cv.json";

const Education = (): ReactElement => {
    const eduIds = resume.education;
    const edus = cv.education.filter((edu) => {
        return eduIds.includes(edu.id);
    })

    const courseIds = resume.courses;
    const courses = cv.courses.filter((course) => {
        return courseIds.includes(course.id);
    })

    const edusWithCourses = edus.map((edu) => {
        return {
            courses: courses.filter((course) => course.associatedWith === edu.id), ...edu
        }
    })



    return (
        <div className="section">
            <h2 className="section-title">
                Education{` `}
                <span role="img" aria-label="apple">
                    🍎
                </span>
            </h2>
            {/*<button className="change-all" onClick={changeAll} style={{ color: 'black', display: 'inline', marginLeft: '1rem' }}>+</button>*/}
            <h5 className="section-redirect" style={{ fontStyle: "oblique" }}>
                Learn more about my time at UBC <Link to="/blog">here</Link>.
            </h5>
            {edusWithCourses.map((edu, i) => {
                const character = ``;
                const triggerTitle = (
                    <>
                        <div className="item"></div>
                        <h3 className="entry-title">
                            {edu.studyType} @ <i>{edu.institution}</i> {character}
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
                                {edu.location}—{formatDate(edu.startDate)} to {edu.endDate ? formatDate(edu.endDate) : "present"}
                            </h5>
                            <ul className="description">
                                <li>{edu.area}</li>
                                <li>Grade: {edu.score}</li>
                            </ul>
                            <div className="courselist">
                                {edu.courses.map((course, i) => {
                                    return (
                                        <div className="course" key={i}>
                                            {course.name}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </Collapsible>
                );
            })}
        </div>
    );
};

export default Education;
