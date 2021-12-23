import React, { ReactElement } from "react";
import { Link } from "gatsby";
import { rhythm } from "../../utils/typography";

import { UNIVERSITY_YEAR_AS_STRING } from "../../data/Constants";

type SetPropertyFn = {
    (classname: string, value: string): void;
};

interface ColorEventTarget extends EventTarget {
    offsetLeft: number;
    offsetTop: number;
    style: {
        setProperty: SetPropertyFn;
    };
}

const Redirects = (): ReactElement => {
    // Inspired by https://codepen.io/electerious/pen/GzrmwB, awesome Code pen!
    const colorButton: React.MouseEventHandler<HTMLButtonElement> = e => {
        const target = e.target as ColorEventTarget;
        const x = e.pageX - target.offsetLeft;
        const y = e.pageY - target.offsetTop;
        target.style.setProperty("--x", `${x}px`);
        target.style.setProperty("--y", `${y}px`);
    };

    const resumeLink = (
        <a
            target="_blank"
            href={"https://resume.michaeldemar.co"}
            rel="noreferrer"
        >
            here
        </a>
    );

    const bio1 = (
        <p>
            My name is Michael DeMarco and I am a {UNIVERSITY_YEAR_AS_STRING}{" "}
            Computer Science Honours student at UBC. I built this website to
            showcase some of my work and to gain a little more practice with web
            development. You can keep scrolling and find an online interactive
            version of my resume. If you would prefer the classic PDF style,
            click {resumeLink}. Otherwise, feel free to check out the links
            below to learn more about me!
        </p>
    );

    return (
        <div
            style={{
                marginLeft: `auto`,
                marginRight: `auto`,
                maxWidth: rhythm(30),
            }}
        >
            <h2 className="redirects-title">
                Hey there, welcome to my website!
            </h2>
            <p className="redirects-bio">{bio1}</p>
            <p className="redirects-bio">
                Have any questions or just want to chat? Feel free to grab a
                30-minute slot on my {`'office hours'`}{" "}
                <a
                    href="https://calendly.com/michaelfromyeg/office-hours"
                    target="_blank"
                    rel="noreferrer"
                >
                    here
                </a>
                .
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
    );
};

export default Redirects;
