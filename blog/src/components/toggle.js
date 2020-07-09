import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import UIfx from 'uifx';
import mp3File from "../../content/assets/click.mp3"


const Toggle = () => {
  const tick = new UIfx(mp3File, {
    volume: 0.3,
    throttleMs: 100
  });
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <label>
          <input
            type="checkbox"
            onChange={e => {
              tick.play();
              toggleTheme(e.target.checked ? "dark" : "light")
            }}
            disabled={!tick}
            checked={theme === "dark"}
          />{" "}
          <span className="toggle-text">Lights off</span>
        </label>
      )}
    </ThemeToggler>
  )
}

export default Toggle
