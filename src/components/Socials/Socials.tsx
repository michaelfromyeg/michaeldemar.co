import React, { ReactElement } from "react";

import * as styles from "./Socials.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faLinkedinIn, faYoutube, faGithub, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Socials = (): ReactElement => {
    return (
        <div className={styles.wrapper}>
            <a href="https://facebook.com/michaelfromyeg" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://instagram.com/michaelfromyeg" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://twitter.com/michaelfromyeg" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://linkedin.com/in/michaelfromyeg" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="https://youtube.com/channel/UCohoNm6NqDAetXX6MiaV_RQ/videos" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="https://github.com/michaelfromyeg" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://stackoverflow.com/users/10660585/michael-demarco" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faStackOverflow} /></a>
            <a href="mailto:michaelfromyeg@gmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a>
        </div>
    )
}

export default Socials
