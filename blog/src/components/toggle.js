import React, { useState, useEffect } from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import UIfx from 'uifx';
import mp3File from "../../content/assets/click.mp3"

const Toggle = () => {
  const [tick, setTick] = useState(null)
  useEffect(() => {
    const newTick = new UIfx(mp3File, {
      volume: 0.3,
      throttleMs: 100
    });
    setTick(newTick)
  }, [])
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <label>
          <input
            type="checkbox"
            onChange={e => {
              if (tick) {
                tick.play();
              }
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
