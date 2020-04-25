import React from "react"
import { Link } from "gatsby"
import Toggle from "./toggle"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
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
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/about`}
        >
          [about]
        </Link>
        {` `}
        <Toggle />
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(28),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        transition: 'color 0.4s ease-out, background 0.4s ease-out',
        backgroundColor: 'var(--bg)',
        color: 'var(--textNormal)',
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © Michael DeMarco {new Date().getFullYear()}
        <br />
        Built with love, sweat, tears, oh and of course{` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>.
      </footer>
    </div>
  )
}

export default Layout
