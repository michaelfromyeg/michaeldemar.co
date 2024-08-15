import React, { ReactElement } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Bio from "../components/Bio/Bio";
import Format from "../components/Format/Format";
import SEO from "../components/SEO/SEO";

const AboutBio: React.FC = () => {
    return (
        <>
            <p>
                Hey there! {`I'm`} Michael, an Honours Computer Science graduate
                from the{" "}
                <a href="https://ubc.ca" target="_blank" rel="noreferrer">
                    University of British Columbia (UBC)
                </a>{" "}
                in Vancouver, Canada. {`I'm`} originally from Edmonton, Alberta;
                I made the leap one province over to pursue my undergraduate
                studies in the fall of 2019. Alongside my major, I completed a{" "}
                <a
                    href="https://datascience.ubc.ca/minor"
                    target="_blank"
                    rel="noreferrer"
                >
                    minor in Data Science
                </a>{" "}
                and participated in the{" "}
                <a
                    href="https://sciencecoop.ubc.ca"
                    target="_blank"
                    rel="noreferrer"
                >
                    co-op program
                </a>
                . I also did a study abroad at the{" "}
                <a href="https://nus.edu.sg">
                    National University of Singapore
                </a>
                .
            </p>
            <p>
                In college, I interned or worked at{" "}
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
                in Supercharging,{" "}
                <a
                    href="https://asc-csa.gc.ca/eng"
                    target="_blank"
                    rel="noreferrer"
                >
                    The Canadian Space Agency
                </a>{" "}
                on {`Canada's`} first-ever lunar rover, and as an{" "}
                <a
                    href="https://cs.ubc.ca/ta/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Undergraduate Teaching Assistant (UTA)
                </a>
                . I taught nine separate courses, including introductory
                programming in Python, introductory data science, computer
                systems, computer networking, data structures and algorithms,
                and parallel computing.
            </p>
            <p>
                Since graduating, {`I've`} moved to San Francisco to complete a
                post-graduate internship at Notion.
            </p>
            <p>
                This blog is my sandbox on the Internet. It has been a passion
                project for a number of years. It showcases my writing,
                projects, design, and travel expereinces.
            </p>
            <p>I hope you enjoy your stay. To wrap up, here are some photos.</p>
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
            me: file(relativePath: { eq: "images/me.jpg" }) {
                childImageSharp {
                    gatsbyImageData(width: 300, layout: CONSTRAINED)
                }
            }
            leo: file(relativePath: { eq: "images/leo1.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 300, layout: CONSTRAINED)
                }
            }
        }
    `;
    const data = useStaticQuery(query);

    const { title } = data.site.siteMetadata;

    const meImage = getImage(data.me.childImageSharp);
    const leoImage = getImage(data.leo.childImageSharp);

    if (meImage === undefined || leoImage === undefined) {
        throw new Error("Could not find image for /about page!");
    }

    return (
        <Format location={location} title={title}>
            <SEO title="About" />
            <Bio />
            <h1>A little about me...</h1>
            <AboutBio />
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
                    alt={"My headshot from my time at Notion."}
                    image={meImage}
                />
                <p>My face! (July 2024)</p>
                <GatsbyImage
                    alt={"A picture of my pet tortoise Leo."}
                    image={leoImage}
                />
                <p>My pet tortoise Leo! (Jun 2020)</p>
            </div>
        </Format>
    );
};

export default About;
