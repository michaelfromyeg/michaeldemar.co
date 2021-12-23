import React, { ReactElement } from "react";
import { graphql } from "gatsby";

import Format from "../components/Format/Format";
import SEO from "../components/SEO/SEO";

interface NotFoundPageProps {
    data: {
        site: {
            siteMetadata: {
                title: string;
            };
        };
    };
    location: string;
}

const NotFoundPage = ({ data, location }: NotFoundPageProps): ReactElement => {
    const { title } = data.site.siteMetadata;

    return (
        <Format location={location} title={title}>
            <SEO title="404: Not Found" />
            <h1>Not Found</h1>
            <p>You just hit a route that {`doesn't`} exist... the sadness.</p>
        </Format>
    );
};

export default NotFoundPage;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
