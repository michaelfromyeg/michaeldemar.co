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
          Lights off
        </label>
      )}
    </ThemeToggler>
  )
}

export default Toggle
