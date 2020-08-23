import React, { ReactElement } from 'react'
import Headroom from 'react-headroom'
import { Link } from 'gatsby'
import Toggle from '../global/Toggle'
import styles from '../../styles/Links.module.scss'

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

interface IProps {
    location: Locations
}

const InnerLinks: React.FC = (props: any): ReactElement => {
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

const Links: React.FC = (props: any): ReactElement => {
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
