import React, { ReactElement } from "react";
import Collapsible from "react-collapsible";
import { Link } from "gatsby";

import resume from "../../../data/resume.json";

const Education = (): ReactElement => {
    const education = resume.education.list;

    // TODO: figure out how to implement this nicely
    // const [open, setOpen] = useState(false)
    // const changeAll = () => {
    //   setOpen(true)
    // }

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
            {education.map((edu, i) => {
                const character = ``;
                const triggerTitle = (
                    <>
                        <div className="item"></div>
                        <h3 className="entry-title">
                            {edu.degree} @ <i>{edu.institution}</i> {character}
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
                                {edu.location}—{edu.startDate} to {edu.endDate}
                            </h5>
                            <ul>
                                <li>{edu.degree}</li>
                                <li>Grade: {edu.grade}</li>
                            </ul>
                            <div className="courselist">
                                {edu.courses.map((course, i) => {
                                    return (
                                        <div className="course" key={i}>
                                            {course}
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
