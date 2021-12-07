import React, { ReactElement } from 'react'
import { graphql } from 'gatsby'

import Bio from '../blog/src/components/global/Bio'
import Layout from '../blog/src/components/global/Layout'
import SEO from '../blog/src/components/global/SEO'
import PostHeader from '../blog/src/components/global/PostHeader'

import * as styles from '../styles/Posts.module.scss'

const ProjectsIndex: React.FC = ({ data, location }: any): ReactElement => {
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="Projects" />
            <Bio />
            <div className={styles.posts}>
                {posts.map(({ node }: any, i: number) => {
                    return <PostHeader key={i} node={node} />
                })}
            </div>
        </Layout>
    )
}

export default ProjectsIndex

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { type: { eq: "project" } } }
        ) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        description
                        featuredImage {
                            childImageSharp {
                                fluid(maxWidth: 400) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
