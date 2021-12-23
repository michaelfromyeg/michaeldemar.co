require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: "michaeldemar.co",
        author: {
            name: "Michael DeMarco",
            summary: `an aspiring computer scientist completing his undergrad at the University of British Columbia (UBC) in Vancouver, BC.`,
        },
        description:
            "Michael DeMarco's personal website! Software development, education, linguistics, and more.",
        siteUrl: "https://michaeldemar.co",
        social: {
            twitter: "michaelfromyeg",
        },
    },
    plugins: [
        `gatsby-plugin-sass`,
        "gatsby-plugin-eslint",
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: `${__dirname}/content/assets`,
                },
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/design`,
                name: `design`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/projects`,
                name: `projects`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/assets`,
                name: `assets`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                            linkImagesToOriginal: false,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-123146160-2",
            },
        },
        `gatsby-plugin-feed`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Michael DeMarco's Blog`,
                short_name: `Michael's Blog`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#202020`,
                display: `minimal-ui`,
                icon: `content/assets/mjd-logo-redblack.png`,
            },
        },
        `gatsby-plugin-react-helmet`,
        "gatsby-plugin-dark-mode",
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        // Enable PWA and offline functionality
        `gatsby-plugin-offline`,
    ],
};
