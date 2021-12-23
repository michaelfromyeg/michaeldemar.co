import React, { ReactElement } from "react";

import * as styles from "./Footer.module.scss"

/**
 * TODOs for footer:
 *  - add to each page
 *  - add socials
 */

const Footer = (): ReactElement => {
    return (
        <footer className={styles.footer}>
            © Michael DeMarco {new Date().getFullYear()}
            <br />
            Built with love, sweat, tears, oh and of course{` `}
            <a href="https://gatsbyjs.org">Gatsby</a>.
        </footer>
    );
};

export default Footer;
