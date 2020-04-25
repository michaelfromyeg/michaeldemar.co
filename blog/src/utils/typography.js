import Typography from 'typography'
import anonymousTheme from 'typography-theme-anonymous'

anonymousTheme.overrideThemeStyles = () => ({
  a: {
    color: 'var(--textLink)',
  },
  // gatsby-remark-autolink-headers - don't underline when hidden
  'a.anchor': {
    boxShadow: 'none',
  },
  // gatsby-remark-autolink-headers - use theme colours for the link icon
  'a.anchor svg[aria-hidden="true"]': {
    stroke: 'var(--textLink)',
  },
  hr: {
    background: 'var(--hr)',
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
