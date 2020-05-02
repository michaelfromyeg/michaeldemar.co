import React from "react"
import resume from "../data/resume.json"
import Collapsible from "react-collapsible"

const Projects = () => {
  const projects = resume.projects.list

  return (
    <>
      <h2 className="section-title">Projects</h2>
      <h5 className="section-redirect" style={{ fontStyle: "oblique" }}>See more <a href="/blog" target="_blank" rel="noopener noreferrer">here</a></h5>
      <div className="section">
        {projects.map((proj, i) => {
          let character = ``;
          const triggerTitle = <><div className="item"></div><h3 className="entry-title">{proj.title} @ {proj.name} {character}</h3></>
          return (
            <Collapsible trigger={triggerTitle} transitionTime={200}>
            <div className="entry" key={i}>
              <h5>{proj.location}—{proj.startDate} to {proj.endDate}</h5>
              <ul>
                {proj.description.map((bullet, i) => {
                  return <li key={i}>{bullet}</li>
                })}
              </ul>
              <div className="techstack">
                {proj.technologies.map((tech,i) => {
                  return <div key={i} className="tech">
                      {tech}
                    </div>
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

export default Projects
