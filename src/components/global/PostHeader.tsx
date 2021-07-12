import React, { ReactElement } from 'react'
import { Link } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
import styles from '../../styles/Post.module.scss'

interface PostHeaderProps {
    type: string
    node: {
        excerpt: string
        frontmatter: {
            title: string
            featuredImage: {
                childImageSharp: {
                    fluid: FluidObject
                }
            }
            date: string
            description: string
        }
        fields: {
            slug: string
        }
    }
}

const PostHeader = ({ node, type }: PostHeaderProps): ReactElement => {
    const title = node.frontmatter.title || node.fields.slug

    return (
        <article className={styles.post}>
            <header>
                <Img
                    className={styles.image}
                    fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                />
                <h3 className={styles.title}>
                    <Link
                        style={{ boxShadow: `none` }}
                        to={`/${type}${node.fields.slug}`}
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
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                        Read more
                    </Link>
                </p>
            </section>
        </article>
    )
}

export default PostHeader
