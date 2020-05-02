import React from "react"
import resume from "../data/resume.json"
import Collapsible from "react-collapsible"

const Education = () => {
  const education = resume.education.list
  return (
    <div className="section">
      <h2 className="section-title">Education</h2>
      <h5 className="section-redirect" style={{ fontStyle: "oblique" }}>
        See more{" "}
        <a href="/blog" target="_blank" rel="noopener noreferrer">
          here
        </a>
      </h5>
      {education.map((edu, i) => {
        const character = ``
        const triggerTitle = (
          <>
            <div className="item"></div>
            <h3 className="entry-title">
              {edu.degree} @ {edu.institution} {character}
            </h3>
          </>
        )
        return (
          <Collapsible trigger={triggerTitle} transitionTime={200}>
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
                  )
                })}
              </div>
            </div>
          </Collapsible>
        )
      })}
    </div>
  )
}

export default Education
