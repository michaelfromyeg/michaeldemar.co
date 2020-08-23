import React, { ReactElement } from 'react'
import resume from '../../../data/resume.json'
import Collapsible from 'react-collapsible'
import { Link } from 'gatsby'

const Activities = (): ReactElement => {
    const activities = resume.activities.list

    return (
        <>
            <h2 className="section-title">
                Activities
                <span role="img" aria-label="Man running">
                    🏃‍♂️
                </span>
            </h2>
            <h5 className="section-redirect" style={{ fontStyle: 'oblique' }}>
                Read more about ways {`I'm`} getting involved{' '}
                <Link to="/blog">here</Link>
            </h5>
            <div className="section">
                {activities.map((activity, i) => {
                    const character = ``
                    const triggerTitle = (
                        <>
                            <div className="item"></div>
                            <h3 className="entry-title">
                                {activity.title} @ {activity.organization}{' '}
                                {character}
                            </h3>
                        </>
                    )
                    return (
                        <Collapsible
                            key={i}
                            trigger={triggerTitle}
                            transitionTime={200}
                            easing="ease-out"
                        >
                            <div className="entry" key={i}>
                                <h5>
                                    {activity.location}—{activity.startDate} to{' '}
                                    {activity.endDate}
                                </h5>
                                <ul>
                                    {activity.description.map((bullet, i) => {
                                        return <li key={i}>{bullet}</li>
                                    })}
                                </ul>
                                <div className="techstack">
                                    {activity.skills.map((skill, i) => {
                                        return (
                                            <div key={i} className="tech">
                                                {skill}
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

export default Activities
