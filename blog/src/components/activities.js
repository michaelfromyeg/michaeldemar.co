import React from "react"
import resume from "../data/resume.json"
import Collapsible from "react-collapsible"

const Activities = () => {
  const activities = resume.activities.list

  return (
    <>
      <h2 className="section-title">Activities</h2>
      <h5 className="section-redirect" style={{ fontStyle: "oblique" }}>See more <a href="/blog" target="_blank" rel="noopener noreferrer">here</a></h5>
      <div className="section">
        {activities.map((activity, i) => {
          let character = ``;
          const triggerTitle = <><div className="item"></div><h3 className="entry-title">{activity.title} @ {activity.organization} {character}</h3></>
          return (
            <Collapsible trigger={triggerTitle} transitionTime={200}>
            <div className="entry" key={i}>
              <h5>{activity.location}—{activity.startDate} to {activity.endDate}</h5>
              <ul>
                {activity.description.map((bullet, i) => {
                  return <li key={i}>{bullet}</li>
                })}
              </ul>
              <div className="techstack">
                {activity.skills.map((skill,i) => {
                  return <div key={i} className="tech">
                      {skill}
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

export default Activities