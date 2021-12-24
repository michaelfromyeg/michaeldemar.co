import React, { ReactElement } from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

type Meta =
    | { name: string; content: string; property?: undefined }
    | { property: string; content: string; name?: undefined };
interface SEOProps {
    description?: string;
    lang?: string;
    meta: Meta[];
    title: string;
}

const SEO = ({ description, lang, meta, title }: SEOProps): ReactElement => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        social {
                            twitter
                        }
                    }
                }
            }
        `
    );

    const metaDescription: string =
        description || site.siteMetadata.description;

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.social.twitter,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ].concat(meta as ConcatArray<Meta>)}
        />
    );
};

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
};

export default SEO;
