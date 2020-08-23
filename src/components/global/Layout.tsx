import React, { ReactElement } from 'react'
import { Link } from 'gatsby'
import Toggle from './Toggle'
import Links, { Locations } from '../global/Links'

import { rhythm, scale } from '../../utils/typography'

const Layout = ({ location, title, children }: any): ReactElement => {
    const rootPath = `${__PATH_PREFIX__}/`
    return (
        <div
            style={{
                marginLeft: `auto`,
                marginRight: `auto`,
                maxWidth: rhythm(36),
                padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            }}
        >
            <header>
                <Links location={Locations.POSTS} />
            </header>
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
