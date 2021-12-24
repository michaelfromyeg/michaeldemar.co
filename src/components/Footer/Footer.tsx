import React, { ReactElement } from "react";
import Socials from "../Socials/Socials"

import * as styles from "./Footer.module.scss"

const Footer = (): ReactElement => {
    return (
        <footer className={styles.footer}>
            <p>© Michael DeMarco {new Date().getFullYear()}</p>
            <Socials />
            <p>Built with love, sweat, tears, oh and of course{` `}
            <a href="https://gatsbyjs.org">Gatsby</a>.</p>
        </footer>
    );
};

export default Footer;
