import React, { ReactElement } from 'react'
import { Link } from 'gatsby'
import Toggle from './Toggle'

import { rhythm, scale } from '../../utils/typography'

const Layout = ({ location, title, children }: any): ReactElement => {
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
        header = (
            <h1
                style={{
                    ...scale(1.5),
                    marginBottom: rhythm(1.5),
                    marginTop: 0,
                }}
            >
                <Link
                    className="headroom-nav"
                    style={{
                        boxShadow: `none`,
                        color: `inherit`,
                    }}
                    to={`/`}
                >
                    {title}
                </Link>
            </h1>
        )
    } else {
        header = (
            <h3
                style={{
                    marginTop: 0,
                }}
            >
                {title}
                {` `}
                <Link
                    className="headroom-nav"
                    style={{
                        boxShadow: `none`,
                        color: `inherit`,
                    }}
                    to={`/`}
                >
                    [home]
                </Link>
                {` `}
                <Link
                    className="headroom-nav"
                    style={{
                        boxShadow: `none`,
                        color: `inherit`,
                    }}
                    to={`/blog`}
                >
                    [blog]
                </Link>
                {` `}
                <Link
                    className="headroom-nav"
                    style={{
                        boxShadow: `none`,
                        color: `inherit`,
                    }}
                    to={`/projects`}
                >
                    [projects]
                </Link>
                {` `}
                <Link
                    className="headroom-nav"
                    style={{
                        boxShadow: `none`,
                        color: `inherit`,
                    }}
                    to={`/design`}
                >
                    [design]
                </Link>
                {` `}
                <Link
                    className="headroom-nav"
                    style={{
                        boxShadow: `none`,
                        color: `inherit`,
                    }}
                    to={`/about`}
                >
                    [about]
                </Link>
                {` `}
                <br />
                <Toggle />
            </h3>
        )
    }
    return (
        <div
            style={{
                marginLeft: `auto`,
                marginRight: `auto`,
                maxWidth: rhythm(36),
                padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            }}
        >
            <header>{header}</header>
            <main>{children}</main>
            <footer style={{ marginTop: '2rem', textAlign: 'center' }}>
                © Michael DeMarco {new Date().getFullYear()}
                <br />
                Built with love, sweat, tears, oh and of course{` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>.
            </footer>
        </div>
    )
}

export default Layout
