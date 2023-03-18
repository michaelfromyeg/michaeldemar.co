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
            <SEO title="Not Found" />
            <h1>404: Not Found</h1>
            <p>Unfortunately that route {`doesn't`} exist. (Should it? <a href="mailto:michaelfromyeg@gmail.com">Shoot me a message</a>.)</p>
            <div style={{
                margin: `0 auto`,
                textAlign: `center`,
            }}>
            <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                height="315"
                src="https://youtube.com/embed/bjs77sPT04s?start=106"
                style={{
                    border: `0px`,
                }}
                title="YouTube video player"
                width="560"
            >
            </iframe>
            </div>
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
