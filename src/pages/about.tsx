import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Bio from '../components/global/Bio'
import Layout from '../components/global/Layout'
import SEO from '../components/global/SEO'
import { ReactElement } from 'react'

interface AboutProps {
    location: string
}

const About = ({ location }: AboutProps): ReactElement => {
    // Fetch bio, photos
    const data = useStaticQuery(graphql`
        query AboutQuery {
            site {
                siteMetadata {
                    title
                }
            }
            leo: file(absolutePath: { regex: "/leo.jpg/" }) {
                childImageSharp {
                    fixed(width: 600, height: 400) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            nw: file(absolutePath: { regex: "/me2.jpg/" }) {
                childImageSharp {
                    fixed(width: 600, height: 400) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    const { title } = data.site.siteMetadata

    return (
        <Layout location={location} title={title}>
            <SEO title="About" />
            <Bio />
            <p>
                {`Hey there! I'm Michael, an upcoming sophomore (or second-year)
                student at the University of British Columbia in Vancouver, BC.
                I'm originally from Edmonton, Alberta (just one province over!)
                but made the leap to pursue undergraduate studies in computer
                science.`}
            </p>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'nowrap',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Img fixed={data.leo.childImageSharp.fixed} />
            </div>
        </Layout>
    )
}

export default About
