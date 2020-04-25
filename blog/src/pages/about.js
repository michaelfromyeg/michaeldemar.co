import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  const bio = `Michael is a sophomore at the University of British Columbia, 
  in Vancouver, Canada. Originally from Edmonton, Alberta, he's since moved to Vancouver 
  to pursue undergraduate studies in Science, with a plan to major in Computing Science 
  and Mathematics. He has in-depth, hands-on experience with a variety of web 
  development technologies, with a focus on the backend.`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <Bio />
      <p>{bio}</p>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
