import React, { ReactElement } from "react";
import Links, { Locations } from "../Links/Links";
import Footer from "../Footer/Footer"

import { rhythm } from "../../utils/typography";

interface FormatProps {
    location: string;
    title: string;
    children: React.ReactNode | React.ReactElement[];
}

const Format = ({ children }: FormatProps): ReactElement => {
    return (
        <div
            style={{
                marginLeft: `auto`,
                marginRight: `auto`,
                maxWidth: rhythm(36),
                padding: `${rhythm(3 / 2)} ${rhythm(3 / 4)}`,
            }}
        >
            <header style={{
                marginBottom: `1em`
            }}>
                <Links location={Locations.POSTS} />
            </header>
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Format;
