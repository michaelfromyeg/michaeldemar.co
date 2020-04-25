import React, { useState } from "react"

import SEO from "../components/seo"
import Arrow from "../components/arrow"
import Typist from "react-typist"

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
    <div className="header">
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
    </div>
  )
}

export default Index
