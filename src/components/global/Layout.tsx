import React, { ReactElement } from 'react'
import Links, { Locations } from '../global/Links'

import { rhythm } from '../../utils/typography'

interface LayoutProps {
    location: string
    title: string
    children: React.ReactChildren | React.ReactElement[]
}

const Layout = ({ children }: LayoutProps): ReactElement => {
    // const rootPath = `${__PATH_PREFIX__}/`
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
