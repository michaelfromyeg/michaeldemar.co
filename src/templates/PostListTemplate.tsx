import React, { ReactElement, ReactNode } from "react";
import { graphql, Link } from "gatsby";

import Bio from "../components/Bio/Bio";
import Format from "../components/Format/Format";
import SEO from "../components/SEO/SEO";
import PostHeader from "../components/PostHeader/PostHeader";
import * as styles from "./PostListTemplate.module.scss";

interface PostListTemplateProps {
    children?: ReactNode;
    data: {
        site: {
            siteMetadata: {
                title: string;
            };
        };
        allMarkdownRemark: {
            edges: {
                node: unknown;
            }[];
        };
    };
    pageContext: {
        type: string;
        currentPage: number;
        numPages: number;
    };
    location: string;
}

const PostListTemplate = ({
    data,
    pageContext,
    location,
}: PostListTemplateProps): ReactElement => {
    // Get page title and posts
    const {
        site: {
            siteMetadata: { title },
        },
        allMarkdownRemark: { edges: posts },
    } = data;

    // Get context of which page this is out of the list of pages
    const { type, currentPage, numPages } = pageContext;

    // Compute next and previous
    // TODO: could implement fancier pagination hook, but given pages are so small currently, not urgent
    const next = Math.min(currentPage + 1, numPages);
    const prev = Math.max(currentPage - 1, 0);

    return (
        <Format location={location} title={title}>
            <SEO title={type} />
            <Bio />
            <div className={styles.posts}>
                {posts.map(({ node }: { node: unknown }, i: number) => {
                    return <PostHeader key={i} type={type} node={node} />;
                })}
            </div>
            <div className={styles.redirects}>
                {currentPage > 1 && (
                    <Link to={`/${type}${prev === 1 ? "" : `/${prev}`}`}>
                        {`Back`}
                    </Link>
                )}
                {currentPage > 1 && currentPage < numPages && (
                    <span>{`•`}</span>
                )}
                {currentPage < numPages && (
                    <Link to={`/${type}/${next}`}>{`Next`}</Link>
                )}
            </div>
        </Format>
    );
};

export default PostListTemplate;

export const pageQuery = graphql`query postListQuery($skip: Int!, $limit: Int!, $type: String!) {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(
    sort: {fields: [frontmatter___date], order: DESC}
    filter: {frontmatter: {type: {eq: $type}}}
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
              gatsbyImageData(
                  placeholder: DOMINANT_COLOR
                  formats: [AUTO, WEBP, AVIF]
                  layout: CONSTRAINED
                )
            }
          }
        }
      }
    }
  }
}
`;
