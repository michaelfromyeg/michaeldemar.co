import React, { ReactElement } from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import * as styles from "./PostHeader.module.scss";

interface PostHeaderProps {
    type: string;
    node: {
        excerpt: string;
        frontmatter: {
            title: string;
            featuredImage: {
                childImageSharp: {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    fluid: any;
                };
            };
            date: string;
            description: string;
        };
        fields: {
            slug: string;
        };
    };
}

const PostHeader = ({ node, type }: PostHeaderProps): ReactElement => {
    const title = node.frontmatter.title || node.fields.slug;
    const link = `/${type}${node.fields.slug}`

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const image = getImage(node.frontmatter.featuredImage as any)

    if (image === undefined) {
        throw new Error(`Could not find header image for post with title ${title}!`)
    }

    return (
        <article className={styles.post}>
            <header>
                <GatsbyImage
                    image={image}
                    alt={`${title} header`}
                    className={styles.image}
                />
                <h3 className={styles.title}>
                    <Link
                        style={{ boxShadow: `none` }}
                        to={link}
                    >
                        {title}
                    </Link>
                </h3>
                <p className={styles.date}>{node.frontmatter.date}</p>
            </header>
            <section className={styles.excerpt}>
                <p
                    dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                    }}
                />
                <p className={styles.more}>
                    <Link style={{ boxShadow: `none` }} to={link}>
                        Read more
                    </Link>
                </p>
            </section>
        </article>
    );
};

export default PostHeader;
