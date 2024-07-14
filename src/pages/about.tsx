import React, { ReactElement } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Bio from "../components/Bio/Bio";
import Format from "../components/Format/Format";
import SEO from "../components/SEO/SEO";

import { UNIVERSITY_YEAR_AS_STRING } from "../data/Constants";

interface AboutBioProps {
    universityYear: string;
}

const AboutBio = ({ universityYear }: AboutBioProps): ReactElement => {
    return (
        <>
            <p>
                Hey there! {`I'm`} Michael, a {universityYear} Honours Computer
                Science student from the{" "}
                <a href="https://ubc.ca" target="_blank" rel="noreferrer">
                    University of British Columbia (UBC)
                </a>{" "}
                in Vancouver, Canada. I am originally from Edmonton, Alberta; I
                made the leap one province over to pursue my undergraduate
                studies in the fall of 2019. Alongside my major, I am working
                towards a{" "}
                <a
                    href="https://datascience.ubc.ca/minor"
                    target="_blank"
                    rel="noreferrer"
                >
                    minor in Data Science
                </a>{" "}
                and am a participant in the{" "}
                <a
                    href="https://sciencecoop.ubc.ca"
                    target="_blank"
                    rel="noreferrer"
                >
                    co-op program
                </a>
                . I also am completing a study abroad at the{" "}
                <a href="https://nus.edu.sg">
                    National University of Singapore
                </a>
                .
            </p>
            <p>
                In the past, {`I've`} worked at{" "}
                <a href="https://curo46.com" target="_blank" rel="noreferrer">
                    General Genomics
                </a>
                ,{" "}
                <a
                    href="https://research.samsung.com/srca"
                    target="_blank"
                    rel="noreferrer"
                >
                    Samsung Electronics
                </a>{" "}
                in business-to-business (B2B) software,{" "}
                <a
                    href="https://amazon.jobs/en/teams/scot"
                    target="_blank"
                    rel="noreferrer"
                >
                    Amazon
                </a>{" "}
                in {`"Supply Chain Optimization Technologies"`} or SCOT,{" "}
                <a
                    href="https://tesla.com/supercharger"
                    target="_blank"
                    rel="noreferrer"
                >
                    Tesla
                </a>{" "}
                in Supercharging, and as an{" "}
                <a
                    href="https://cs.ubc.ca/ta/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Undergraduate Teaching Assistant (UTA)
                </a>
                . To date, {`I've`} taught seven separate courses, including
                introductory programming in Python, introductory data science,
                computer systems, computer networking, and data structures and
                algorithms.
            </p>
            <p>
                This blog is my sandbox on the Internet. It has been a passion
                project for a number of years. It showcases my writing,
                projects, design, and travel expereinces.
            </p>
            <p>
                I hope you enjoy your stay. To wrap up, here are some photos I
                particularly enjoy.
            </p>
        </>
    );
};

interface AboutProps {
    location: string;
}

const About = ({ location }: AboutProps): ReactElement => {
    const query = graphql`
        query AboutQuery {
            site {
                siteMetadata {
                    title
                }
            }
            leo1: file(relativePath: { eq: "images/leo1.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 600, layout: CONSTRAINED)
                }
            }
            collision: file(relativePath: { eq: "images/collision.jpg" }) {
                childImageSharp {
                    gatsbyImageData(width: 600, layout: CONSTRAINED)
                }
            }
            amazon3: file(relativePath: { eq: "images/amazon3.jpg" }) {
                childImageSharp {
                    gatsbyImageData(width: 600, layout: CONSTRAINED)
                }
            }
        }
    `;
    const data = useStaticQuery(query);

    const { title } = data.site.siteMetadata;

    const leoImage = getImage(data.leo1.childImageSharp);
    const collisionImage = getImage(data.collision.childImageSharp);
    const amazonImage = getImage(data.amazon3.childImageSharp);

    if (
        leoImage === undefined ||
        collisionImage === undefined ||
        amazonImage === undefined
    ) {
        throw new Error("Could not find image for /about page!");
    }

    return (
        <Format location={location} title={title}>
            <SEO title="About" />
            <Bio />
            <h1>A little about me...</h1>
            <AboutBio universityYear={UNIVERSITY_YEAR_AS_STRING} />
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <GatsbyImage
                    alt={"A picture of my pet tortoise Leo."}
                    image={leoImage}
                />
                <p>My pet tortoise Leo! (Jun 2020)</p>
                <GatsbyImage
                    alt={
                        "Sitting in front of the Collision logo at the 2022 edition of the conference."
                    }
                    image={collisionImage}
                />
                <p>Volunteering at Collision 2022. (June 2022)</p>
                <GatsbyImage
                    alt={
                        "Standing in front of the Amazon logo in the Toronto office."
                    }
                    image={amazonImage}
                />
                <p>Interning in Toronto, Ontario for the summer. (July 2022)</p>
            </div>
        </Format>
    );
};

export default About;
