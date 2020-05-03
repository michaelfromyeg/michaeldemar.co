import React, { useEffect } from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import UIfx from "uifx"
import mp3File from "../../content/assets/click.mp3"

const Toggle = () => {
  // from: https://alligator.io/react/adding-sound-to-your-react-apps/
  let click

  useEffect(() => {
    click = new UIfx(mp3File)
  }, [])

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <label>
          <input
            type="checkbox"
            onChange={e => {
              click.play(0.7)
              toggleTheme(e.target.checked ? "dark" : "light")
            }}
            checked={theme === "dark"}
          />{" "}
          <span className="toggle-text">Lights off</span>
        </label>
      )}
    </ThemeToggler>
  )
}

export default Toggle
