import Typography from "typography";
import CodePlugin from "typography-plugin-code";
import theme from "typography-theme-grand-view";

theme.plugins = [
    new CodePlugin()
]

theme.title = "Michael's Grand View";
theme.baseLineHeight = 1.6;
theme.headerColor = "var(--text-title)";
theme.bodyColor = "var(--text-normal)";

/**
 * Set correct color styles, font sizes, and turn off default spacing.
 */
theme.overrideThemeStyles = ({ rhythm }) => ({

    "h1,h2,h3,h4,h5,h6": {
        marginTop: 0,
        marginBottom: 0,
    },
    a: {
        color: "var(--text-link)",
        textDecoration: "none",
    },
    "a:hover,a:active": {
        color: "var(--text-link-hover)",
    },
    blockquote: {
        backgroundColor: "var(--text-background)",
        color: "var(--text-normal)",
        borderRadius: "0.5rem",
        paddingTop: rhythm(1 / 16),
        paddingLeft: rhythm(14 / 16),
        paddingBottom: rhythm(14 / 16),
        paddingRight: rhythm(14 / 16),
        marginBottom: 0,
    }
    // "body, p, h1, h2, h3, h4, h5, h6, ul, ol, li, img, div, button": {
    //     // color: "var(--text-normal)",
    //     // margin: 0,
    //     lineHeight: 1.6,
    // },
});

const typography = new Typography(theme);

// Hot reload typography in development
if (process.env.NODE_ENV !== "production") {
    typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
