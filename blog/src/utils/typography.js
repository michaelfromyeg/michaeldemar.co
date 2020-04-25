import Typography from 'typography'
import anonymousTheme from 'typography-theme-anonymous'

const typography = new Typography(anonymousTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
