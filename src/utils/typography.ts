import Typography from "typography";
import theme from "typography-theme-grand-view";

/**
 * Set correct color styles, font sizes, and turn off default spacing.
 */
theme.overrideThemeStyles = () => ({
    a: {
        color: "var(--text-link)",
    },
    "body, p, h1, h2, h3, h4, h5, h6, ul, ol, li, img, div, button": {
        color: "var(--text-normal)",
        margin: 0,
        lineHeight: 1.6,
    },
});

const typography = new Typography(theme);

// Hot reload typography in development
if (process.env.NODE_ENV !== `production`) {
    typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
