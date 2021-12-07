import React, { useEffect, useState, ReactElement } from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import UIfx from 'uifx'
import mp3File from '../../../content/assets/click.mp3'
import * as styles from '../../styles/Toggle.module.scss'
import { Locations } from './Links'

interface ToggleProps {
    location: Locations
}

type ToggleThemeFn = {
    (checked: string): void
}

interface ThemeTogglerProps {
    theme: unknown
    toggleTheme: ToggleThemeFn
}

const Toggle = (props: ToggleProps): ReactElement => {
    const prefix = props.location === Locations.HOMEPAGE ? 'homepage' : ''
    const [tick, setTick] = useState(null)

    useEffect(() => {
        setTick(new UIfx(mp3File))
    }, [])

    return (
        <div className={styles[`${prefix}Toggle`]}>
            <ThemeToggler>
                {({ theme, toggleTheme }: ThemeTogglerProps) => (
                    <label>
                        <input
                            type="checkbox"
                            onChange={e => {
                                if (tick) tick.play()
                                toggleTheme(e.target.checked ? 'dark' : 'light')
                            }}
                            disabled={!tick}
                            checked={theme === 'dark'}
                        />{' '}
                        <span className="toggle-text">Lights off</span>
                    </label>
                )}
            </ThemeToggler>
        </div>
    )
}

export default Toggle
