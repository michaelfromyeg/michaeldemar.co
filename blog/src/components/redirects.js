import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import resume from "../../content/assets/resume.pdf"

const Redirects = () => {
  // Inspired from https://codepen.io/electerious/pen/GzrmwB, awesome Codepen!
  const colorButton = e => {
    const x = e.pageX - e.target.offsetLeft
    const y = e.pageY - e.target.offsetTop
    e.target.style.setProperty("--x", `${x}px`)
    e.target.style.setProperty("--y", `${y}px`)
  }

  const resumeLink = <a href={resume}>here</a>

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(22),
      }}
    >
      <h2 className="redirects-title">Hey there, welcome to my website!</h2>
      <p className="redirects-bio">
        My name is Michael DeMarco and I'm an upcoming sophomore student at UBC.
        I built this website to showcase some of my work and to gain a little more
        practice with web development. You can keep scrolling and find an online
        interactive version of my resume. If you'd prefer the classic pdf style,
        click {resumeLink}. Otherwise, feel free to check out the links below to learn
        more about me!
      </p>

      <div className="redirect-wrapper">
        <Link className="no-opacity" to="/blog">
          <button onMouseMove={colorButton} className="button">
            Blog
          </button>
        </Link>
        <Link className="no-opacity" to="/projects">
          <button onMouseMove={colorButton} className="button">
            Projects
          </button>
        </Link>
        <Link className="no-opacity" to="/design">
          <button onMouseMove={colorButton} className="button">
            Graphic Design
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Redirects
