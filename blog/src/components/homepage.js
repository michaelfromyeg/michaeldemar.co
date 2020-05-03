import React, { useState } from "react"
import Headroom from "react-headroom"
import Typist from "react-typist"

import { Link } from "gatsby"
import SEO from "./seo"
import Arrow from "./arrow"
import Toggle from "./toggle"
import Education from "./education"
import Experience from "./experience"
import Projects from "./projects"
import Activities from "./activities"
import Redirects from "./redirects"
import IndexFooter from "./indexFooter"

import logo from "../../content/assets/mjd-logo-black.svg"
import { rhythm, scale } from "../utils/typography"

const Homepage = () => {
  const [index, setIndex] = useState(0)

  const onComplete = () => {
    if (index + 1 === 4) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  const strings = [
    "Michael DeMarco",
    "an aspiring software developer",
    "a UBC sophomore",
    "excited to meet you!",
  ]

  /*const scrollTo = e => {
    e.preventDefault()
    let target = document.getElementById("redirects")
    target.scrollIntoView({ behaviour: "smooth", inline: "nearest" })
  }*/

  return (
    <>
      <div className="header">
        <Headroom
          style={{
            background: "rgba(0, 0, 0, 0.1)",
            boxShadow: "1px 1px 1px rgba(0,0,0,0.25)",
          }}
        >
          <h1 style={{ display: "inline" }} className="headroom-text">
            michaeldemar.co
          </h1>
          {` `}
          <Link className="headroom-nav" to={`/`}>
            [home]
          </Link>
          {` `}
          <Link className="headroom-nav" to={`/blog`}>
            [blog]
          </Link>
          {` `}
          <Link className="headroom-nav" to={`/projects`}>
            [projects]
          </Link>
          {` `}
          <Link className="headroom-nav" to={`/design`}>
            [design]
          </Link>
          {` `}
          <Link className="headroom-nav" to={`/about`}>
            [about]
          </Link>
          {` `}
          <Toggle className="headroom-toggle" />
        </Headroom>
        <SEO title="Home" />
        <img
          src={logo}
          alt="Michael's logo"
          className="background-logo shadow"
        />
        {/* <a href="#redirects" onClick={scrollTo}> */}
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
          className="title-text"
        >
          Hi, I'm
          <Typist
            className="typist"
            onTypingDone={onComplete}
            stdTypingDelay={0}
            key={index}
          >
            <span>
              {`>`}
              {strings[index]}
            </span>
            <Typist.Backspace count={strings[index].length} delay={2500} />
          </Typist>
        </h1>
        <Arrow />
        {/* </a> */}
      </div>

      <div id="redirects"></div>
      <Redirects />

      {/* Visual resume */}
      <div
        id="resume"
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(50),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <Education />
        <Experience  />
        <Projects />
        <Activities  />
        <IndexFooter />
      </div>
    </>
  )
}

export default Homepage
