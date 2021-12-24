import React, { ReactElement, ReactNode } from "react";
import { graphql, Link } from "gatsby";

import Bio from "../components/Bio/Bio";
import Format from "../components/Format/Format";
import SEO from "../components/SEO/SEO";

interface PostTemplateProps {
    children?: ReactNode;
    data: {
        site: {
            siteMetadata: {
                title: string;
            };
        };
        markdownRemark: {
            html: string;
            excerpt: string;
            frontmatter: {
                title: string;
                description: string;
                date: string;
            };
        };
    };
    pageContext: {
        type: string;
        previous: {
            fields: {
                slug: string;
            };
            frontmatter: {
                title: string;
                type: string;
            };
        };
        next: {
            fields: {
                slug: string;
            };
            frontmatter: {
                title: string;
                type: string;
            };
        };
    };
    location: string;
}

const PostTemplate = ({
    data,
    pageContext,
    location,
}: PostTemplateProps): ReactElement => {
    // Get post data, site title
    const {
        markdownRemark: post,
        site: {
            siteMetadata: { title },
        },
    } = data;

    // Get previous page, next page from context
    const { previous, next } = pageContext;

    return (
        <Format location={location} title={title}>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
            />
            <article>
                <header>
                    <h1>{post.frontmatter.title}</h1>
                    <p>{post.frontmatter.date}</p>
                </header>
                <section dangerouslySetInnerHTML={{ __html: post.html }} />
                <hr />
                <footer>
                    <Bio />
                </footer>
            </article>
            {/* Render navigation to next and previous post (if a next or previous post exists!) */}
            {(next || previous) && (
                <nav>
                    <ul
                        style={{
                            display: `flex`,
                            flexWrap: `wrap`,
                            justifyContent: `space-between`,
                            listStyle: `none`,
                            padding: 0,
                        }}
                    >
                        {previous && (
                            <li>
                                <Link
                                    to={`/${previous.frontmatter.type}${previous.fields.slug}`}
                                    rel="prev"
                                >
                                    ← {previous.frontmatter.title}
                                </Link>
                            </li>
                        )}
                        {next && (
                            <li>
                                <Link
                                    to={`/${next.frontmatter.type}${next.fields.slug}`}
                                    rel="next"
                                >
                                    {next.frontmatter.title} →
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            )}
        </Format>
    );
};

export default PostTemplate;

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
            }
        }
    }
`;
