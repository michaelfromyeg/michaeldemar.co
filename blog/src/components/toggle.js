import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const Toggle = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <label>
          <input
            type="checkbox"
            onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
          />{" "}
          <span className="toggle-text">Lights off</span>
        </label>
      )}
    </ThemeToggler>
  )
}

export default Toggle
