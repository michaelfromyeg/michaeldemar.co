import React, { useEffect, useRef } from "react"
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
              //TODO: come up with a better fix to this--why does it not load sometimes? error hits useRef, click.current needed
              /*
                Assignments to the 'click' variable from inside React Hook useEffect will be lost after each render. 
                To preserve the value over time, store it in a useRef Hook and keep the mutable value in the   
                '.current' property. Otherwise, you can move this variable directly inside useEffect  react-hooks/exhaustive-deps
              */
              if (click == null) {
                console.log("mp3 file has not loaded!")
              } else {
                click.play(0.7)
              }
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
