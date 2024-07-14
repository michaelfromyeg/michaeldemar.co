import React, { ReactElement } from "react";
import Format from "../components/Format/Format";
import SEO from "../components/SEO/SEO";
import { graphql, useStaticQuery } from "gatsby";

const NOTION_COLLECTION_UUID = "d4aa82bc984a4236a5b2c6e11ce3da8b";

interface MusicProps {
    location: string;
    serverData: any;
}

const Music = ({ location, serverData }: MusicProps): ReactElement => {
    const query = graphql`
        query MusicQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `;
    const data = useStaticQuery(query);

    const { title } = data.site.siteMetadata;

    return (
        <Format location={location} title={title}>
            <SEO title="About" />
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                {`Hello, world`}
                <img alt="Happy dog" src={serverData.message} />
            </div>
        </Format>
    );
};

export async function getServerData() {
    try {
        const res = await fetch(`https://dog.ceo/api/breeds/image/random`);

        if (!res.ok) {
            throw new Error(`Response failed`);
        }

        return {
            props: await res.json(),
        };
    } catch (error) {
        return {
            status: 500,
            headers: {},
            props: {},
        };
    }
}

export default Music;
