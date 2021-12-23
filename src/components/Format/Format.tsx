import React, { ReactElement } from "react";
import Links, { Locations } from "../Links/Links";
import Footer from "../Footer/Footer"

import { rhythm } from "../../utils/typography";

interface FormatProps {
    location: string;
    title: string;
    children: React.ReactChildren | React.ReactElement[];
}

const Format = ({ children }: FormatProps): ReactElement => {
    // const rootPath = `${__PATH_PREFIX__}/`
    return (
        <div
            style={{
                marginLeft: `auto`,
                marginRight: `auto`,
                maxWidth: rhythm(36),
                padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            }}
        >
            <header>
                <Links location={Locations.POSTS} />
            </header>
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Format;
