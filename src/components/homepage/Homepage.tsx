import React, { useState } from 'react'

import Typist from 'react-typist'

import SEO from '../global/SEO'
import Arrow from './arrow'
import Links, { Locations } from '../global/Links'

import Education from './resume/Education'
import Experience from './resume/Experience'
import Projects from './resume/Projects'
import Activities from './resume/Activities'
import Redirects from '../global/Redirects'
import IndexFooter from './Footer'

import logo from '../../../content/assets/mjd-logo-black.svg'
import { rhythm, scale } from '../../utils/typography'

const Homepage = () => {
    const [index, setIndex] = useState(0)

    const strings = [
        'Michael DeMarco',
        'an aspiring software developer',
        'a UBC sophomore',
        'excited to meet you!',
    ]

    const onComplete = () => {
        if (index + 1 === strings.length) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    /*
    const scrollTo = e => {
        e.preventDefault()
        let target = document.getElementById("redirects")
        target.scrollIntoView({ behaviour: "smooth", inline: "nearest" })
    }
    */

    return (
        <>
            <Links location={Locations.HOMEPAGE} />
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
                Hi, {`I'm`}
                <Typist
                    className="typist"
                    onTypingDone={onComplete}
                    stdTypingDelay={0}
                    key={index}
                >
                    {`>`}
                    {strings[index]}
                    <Typist.Backspace
                        count={strings[index].length}
                        delay={2500}
                    />
                </Typist>
            </h1>
            <Arrow />
            {/* </a> */}

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
                <Experience />
                <Projects />
                <Activities />
                <IndexFooter />
            </div>
        </>
    )
}

export default Homepage
