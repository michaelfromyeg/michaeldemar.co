import React, { ReactElement } from "react";
import Format from "../components/Format/Format";
import SEO from "../components/SEO/SEO";
import { graphql, useStaticQuery } from "gatsby";
import { Client } from "@notionhq/client";

import "../styles/music.scss";

const NOTION_COLLECTION_UUID = "d4aa82bc984a4236a5b2c6e11ce3da8b";

const notion = new Client();

interface Cover {
    name: string;
    url: string;
    rawUrl: string;
}

interface Album {
    id: string;
    Review: string;
    Cover: Cover[];
    Rating: string;
    URL: string;
    Arist: string;
    "Release Date": string;
    Album: string;
}

interface MusicProps {
    location: string;
    serverData: Album[];
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

    const getPages = async () => {
        try {
            const response = await notion.databases.query({
                database_id: NOTION_COLLECTION_UUID,
            });
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    getPages();

    return (
        <Format location={location} title={title}>
            <SEO title="About" />
            <p>
                View these reivews on my Notion site{" "}
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://notions.michaeldemar.co/d4aa82bc984a4236a5b2c6e11ce3da8b?v=d6979a6f4b4c4978b25a7ac10e972345&pvs=4"
                >
                    here
                </a>
                !
            </p>
            <div className="album-grid">
                {serverData.map(album => {
                    const formattedDate = new Date(
                        album["Release Date"]
                    ).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    });

                    return (
                        <div className="album-card" key={album.id}>
                            <img
                                className="album-cover"
                                src={album.Cover[0].url}
                                alt={album.Cover[0].name}
                            />
                            <hr
                                style={{
                                    margin: "0rem 1rem 1rem 1rem",
                                }}
                            />
                            <h2 className="album-title">{album.Album}</h2>
                            <p className="album-artist">{album.Arist}</p>
                            <p className="album-release-date">
                                {formattedDate}
                            </p>
                            <p className="album-rating">{album.Rating}</p>
                            <p className="album-review">{album.Review}</p>
                            <a className="album-link" href={album.URL}>
                                Listen
                            </a>
                        </div>
                    );
                })}
            </div>
        </Format>
    );
};

export async function getServerData() {
    try {
        const res = await fetch(
            `https://notion-api.splitbee.io/v1/table/${NOTION_COLLECTION_UUID}`
        );

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
