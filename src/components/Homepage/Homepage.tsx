import React, { useState, ReactElement } from "react";

import Typist from "react-typist";

import SEO from "../SEO/SEO";
import Links, { Locations } from "../Links/Links";
// import Arrow from "../Arrow/Arrow";

import Education from "../Resume/Education/Education";
import Experience from "../Resume/Experience/Experience";
import Projects from "../Resume/Projects/Projects";
import Activities from "../Resume/Activities/Activities";

import Redirects from "../Redirects/Redirects";
import Footer from "../Footer/Footer"

import Logo from "../../../content/assets/mjd-logo-black.svg";
import { UNIVERSITY_YEAR_AS_STRING } from "../../data/Constants";

const Homepage: React.FC = (): ReactElement => {
    const [index, setIndex] = useState(0);

    const strings = [
        "Michael DeMarco",
        "an aspiring software developer",
        `a UBC ${UNIVERSITY_YEAR_AS_STRING}`,
        "excited to meet you!",
    ];

    const onComplete = () => {
        if (index + 1 === strings.length) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    };

    const LogoComponent = Logo as React.ElementType;

    return (
        <>
            <Links location={Locations.HOMEPAGE} />
            <SEO title="Home" />
            <div className="logo-text-wrapper">
            <LogoComponent
                alt="Michael's logo"
                className="background-logo shadow"
            />
            <h1 className="title-text">
                Hi, {`I'm`}
                <Typist
                    className="typist"
                    onTypingDone={onComplete}
                    stdTypingDelay={25}
                    key={index}
                >
                    {`>`}{strings[index]}
                    <Typist.Backspace
                        count={strings[index].length}
                        delay={3000}
                    />
                </Typist>
            </h1>
            </div>
            {/* <Arrow /> */}
            <br /><br />
            <Redirects />
            <div className="resume">
                <Education />
                <Experience />
                <Projects />
                <Activities />
                <Footer />
            </div>
        </>
    );
};

export default Homepage;
