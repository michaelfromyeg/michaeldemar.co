import React, { ReactElement } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import { rhythm } from "../../utils/typography";

import * as styles from "./Bio.module.scss"

const Bio = (): ReactElement => {
  const data = useStaticQuery(graphql`query BioQuery {
  avatar: file(relativePath: {eq: "images/me3.png" }) {
    childImageSharp {
      gatsbyImageData(
        quality: 100
        placeholder: BLURRED
        width: 100
        height: 100
      )
    }
  }
  site {
    siteMetadata {
      author {
        name
        summary
      }
      social {
        twitter
      }
    }
  }
}
`);

  const { author, social } = data.site.siteMetadata;
  const headshot = getImage(data.avatar);

  if (headshot === undefined) {
    throw new Error("Could not find headshot!")
  }

  return (
    <div className="bio">
      <GatsbyImage
        image={headshot}
        alt={author.name}
        className={styles.headshot}
        style={{
            marginRight: rhythm(1 / 2)
        }}
      />
      <p>
        Written, designed, and programmed by <strong>{author.name}</strong> {author.summary}⚡🦅
        <br />
        <FontAwesomeIcon icon={faTwitter} />{` `}
        <a href={`https://twitter.com/${social.twitter}`} target="_blank" rel="noreferrer">
          See his thoughts in <span className="strikethrough">140 characters</span> 280 characters or less
        </a>.
      </p>
    </div>
  );
};

export default Bio;
