import React from "react"
import resume from "../data/resume.json"
import Collapsible from "react-collapsible"
import { Link } from "gatsby"

const Experience = () => {
  const experiences = resume.experience.list

  return (
    <>
      <h2 className="section-title">Experience👨‍💻</h2>
      <h5 className="section-redirect" style={{ fontStyle: "oblique" }}>
        Read about my experiences in-depth <Link to="/blog">here</Link>
      </h5>
      <div className="section">
        {experiences.map((exp, i) => {
          let character = ``
          const triggerTitle = (
            <>
              <div className="item"></div>
              <h3 className="entry-title">
                {exp.title} @ {exp.company} {character}
              </h3>
            </>
          )
          return (
            <Collapsible trigger={triggerTitle} transitionTime={200}>
              <div className="entry" key={i}>
                <h5>
                  {exp.location}—{exp.startDate} to {exp.endDate}
                </h5>
                <ul>
                  {exp.description.map((bullet, i) => {
                    return <li key={i}>{bullet}</li>
                  })}
                </ul>
                <div className="techstack">
                  {exp.technologies.map((tech, i) => {
                    return (
                      <div key={i} className="tech">
                        {tech}
                      </div>
                    )
                  })}
                </div>
              </div>
            </Collapsible>
          )
        })}
      </div>
    </>
  )
}

export default Experience
