import Typography from 'typography'
import anonymousTheme from 'typography-theme-anonymous'

anonymousTheme.overrideThemeStyles = () => ({
    a: {
        color: 'var(--text-link)',
    },
    'body, p, h1, h2, h3, h4, h5, h6, ul, ol, li, img, div, button': {
        color: 'var(--text-normal)',
        margin: 0,
        lineHeight: 1,
    },
})

const typography = new Typography(anonymousTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
    typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale