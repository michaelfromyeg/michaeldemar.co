import React, { ReactElement } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Bio from "../components/Bio/Bio";
import Format from "../components/Format/Format";
import SEO from "../components/SEO/SEO";

import { UNIVERSITY_YEAR_AS_STRING } from "../data/Constants";

interface AboutBioProps {
    universityYear: string
}

const AboutBio = ({ universityYear }: AboutBioProps): ReactElement => {
    return (
        <p>
            Hey there! {`I'm`} Michael, a {universityYear} Honours Computer Science student from the <a href="https://ubc.ca" target="_blank" rel="noreferrer">University of British Columbia (UBC)</a> in Vancouver, Canada.
            I am originally from Edmonton, Alberta; I made the leap one province over to pursue my undergraduate studies in the fall of 2019.
            Alongside my major, I am working towards a <a href="https://datascience.ubc.ca/minor" target="_blank" rel="noreferrer">minor in Data Science</a> and am a participant in the <a href="https://sciencecoop.ubc.ca" target="_blank" rel="noreferrer">co-op program</a>. I also am completing a study abroad at the <a href="https://nus.edu.sg">National University of Singapore</a>.
            In the past, {`I've`} worked at <a href="https://curo46.com/" target="_blank" rel="noreferrer">General Genomics</a>, <a href="https://research.samsung.com/srca" target="_blank" rel="noreferrer">Samsung Electronics</a> (at SRCA), and as an <a href="https://cs.ubc.ca/ta/" target="_blank" rel="noreferrer">Undergraduate Teaching Assistant (UTA)</a>.
            To date, {`I've`} taught seven separate courses, ranging from <a href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=CPSC&course=213" target="_blank" rel="noreferrer">computer systems</a> (using C and Assembly) to <a href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=CPSC&course=103" target="_blank" rel="noreferrer">introductory programming in Python</a>!
        </p>
    )
}

interface AboutProps {
    location: string;
}

const About = ({ location }: AboutProps): ReactElement => {
    // Fetch bio, photos
    const data = useStaticQuery(graphql`query AboutQuery {
  site {
    siteMetadata {
      title
    }
  }
  leo1: file(relativePath: {eq: "images/leo1.png" }) {
    childImageSharp {
        gatsbyImageData(
          width: 400
          layout: CONSTRAINED
        )
    }
  }
  samsung1: file(relativePath: {eq: "images/samsung1.png" }) {
    childImageSharp {
        gatsbyImageData(
          width: 400
          layout: CONSTRAINED
        )
    }
  }
  toronto1: file(relativePath: {eq: "images/toronto1.png" }) {
    childImageSharp {
        gatsbyImageData(
          width: 400
          layout: CONSTRAINED
        )
    }
  }
}
`);

    const { title } = data.site.siteMetadata;

    const leoImage = getImage(data.leo1.childImageSharp)
    const samsungImage = getImage(data.samsung1.childImageSharp)
    const torontoImage = getImage(data.toronto1.childImageSharp)

    if (leoImage === undefined || samsungImage === undefined || torontoImage === undefined) {
        throw new Error("Could not find image for /about page!")
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
                <GatsbyImage alt={"A picture of my pet tortoise Leo."} image={leoImage} />
                <p>My pet tortoise Leo! (Jun 2020)</p>
                <GatsbyImage alt={"My last day at Samsung."} image={samsungImage} />
                <p>My last day at Samsung. (Aug 2021)</p>
                <GatsbyImage alt={"In Toronto for Summer 2022!"} image={torontoImage} />
                <p>Interning in Toronto, Ontario for the summer. (May 2022)</p>
            </div>
        </Format>
    );
};

export default About;
