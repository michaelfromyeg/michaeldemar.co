import React, { ReactElement } from 'react'
import { Link } from 'gatsby'
import Toggle from '../global/Toggle'
import * as styles from '../../styles/Links.module.scss'

export enum Locations {
    HOMEPAGE,
    POSTS,
}

export const Destinations = [
    {
        name: 'home',
        location: '',
    },
    {
        name: 'blog',
    },
    {
        name: 'projects',
    },
    {
        name: 'design',
    },
    {
        name: 'about',
    },
]

interface InnerLinksProps {
    location: Locations
}

const InnerLinks = (props: InnerLinksProps): ReactElement => {
    const location = props.location
    const prefix = location === Locations.HOMEPAGE ? 'homepage' : ''
    return (
        <div className={styles[`${prefix}Links`]}>
            <h1 className={styles[`${prefix}Title`]}>michaeldemar.co</h1>
            {Destinations.map((d, index) => {
                return (
                    <Link
                        key={index}
                        className={styles[`${prefix}Link`]}
                        to={`/${
                            typeof d.location === 'string' ? d.location : d.name
                        }`}
                    >
                        [{d.name}]
                    </Link>
                )
            })}
            {location !== Locations.HOMEPAGE && <br />}
            <Toggle location={location} />
        </div>
    )
}

interface LinksProps {
    location: Locations
}

const Links = (props: LinksProps): ReactElement => {
    const location = props.location
    switch (location) {
        case Locations.HOMEPAGE:
            return (
                <div className={styles.homepageWrapper}>
                    <InnerLinks location={location} />
                </div>
            )
        case Locations.POSTS:
            return <InnerLinks location={location} />
        default:
            throw new Error(`Invalid location given in Links.tsx`)
    }
}

export default Links
