import React, { useState } from "react"
import Headroom from "react-headroom"
import Typist from "react-typist"

import SEO from "../components/seo"
import Arrow from "../components/arrow"
import Toggle from "../components/toggle"
import Test from "../components/test"

import logo from "../../content/assets/mjd-logo-black.svg"
import { rhythm, scale } from "../utils/typography"

const Index = () => {
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

  return (
    <>
      <div className="header">
        <Headroom
          style={{
            background: "rgba(0, 0, 0, 0.1)",
            boxShadow: "1px 1px 1px rgba(0,0,0,0.25)",
          }}
        >
          <h1
            style={{
              margin: 0,
              color: "rgb(252, 253, 254)",
            }}
          >
            michaeldemar.co
          </h1>
          <Toggle />
        </Headroom>
        <SEO title="Home" />
        <img src={logo} alt="Michael's logo" className="background-logo" />
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
            stdTypingDelay="0"
            key={index}
          >
            <span>
              {`>`}
              {strings[index]}
            </span>
            <Typist.Backspace count={strings[index].length} delay={2500} />
          </Typist>
        </h1>
        <Arrow></Arrow>
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
        <Test />
      </div>
    </>
  )
}

export default Index
