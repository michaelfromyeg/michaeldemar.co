import React, { ReactElement } from 'react'
import { graphql, Link } from 'gatsby'

import Bio from '../components/global/Bio'
import Layout from '../components/global/Layout'
import SEO from '../components/global/SEO'
import PostHeader from '../components/global/PostHeader'
import styles from '../styles/Posts.module.scss'

const PostListTemplate: React.FC = ({
    data,
    pageContext,
    location,
}: any): ReactElement => {
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    console.log('posts', posts)
    // TODO: use the hook instead
    const { type, currentPage, numPages } = pageContext
    const next = Math.min(currentPage + 1, numPages)
    const prev =
        currentPage - 1 === 1 || currentPage - 1 <= 0 ? '' : currentPage - 1
    return (
        <Layout location={location} title={siteTitle}>
            <SEO title={type} />
            <Bio />
            <div className={styles.posts}>
                {posts.map(({ node }: any, i: number) => {
                    return <PostHeader key={i} type={type} node={node} />
                })}
            </div>
            <div className={styles.redirects}>
                <Link to={`/${type}/${prev}`}>Previous</Link>
                <br />
                <Link to={`/${type}/${next}`}>Next</Link>
            </div>
        </Layout>
    )
}

export default PostListTemplate

export const pageQuery = graphql`
    query postListQuery($skip: Int!, $limit: Int!, $type: String!) {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { type: { eq: $type } } }
            limit: $limit
            skip: $skip
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
