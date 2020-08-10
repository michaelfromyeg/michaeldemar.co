import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Bio from '../components/global/Bio'
import Layout from '../components/global/Layout'
import SEO from '../components/global/SEO'

const About = ({ location }: any) => {
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
    const siteTitle = data.site.siteMetadata.title

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="About" />
            <Bio />
            <p>
                {`Hey there! I'm Michael, an upcoming sophomore (or second-year)
                student at the University of British Columbia in Vancouver, BC.
                I'm originally from Edmonton, Alberta (just one province over!)
                but made the leap to pursue undergraduate studies in computer
                science. I'm planning on updating this about section soon, but
                I need to go to bed, so for now I'll leave you with this: a) I
                like making websites! (okay, you probably could've told me that
                by now) b) I own a pet tortoise named Leo (that's the first picture, in 
                case you weren't sure) and c) I'm addicted to hackathons—the second photo is me at 
                nwHacks 2019, which is an event I know help plan!`}
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
                <Img fixed={data.nw.childImageSharp.fixed} />
            </div>
        </Layout>
    )
}

export default About
