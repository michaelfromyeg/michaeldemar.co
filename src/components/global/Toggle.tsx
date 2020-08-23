import React, { useState, useEffect } from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import UIfx from 'uifx'
import mp3File from '../../../content/assets/click.mp3'
import styles from '../../styles/Toggle.module.scss'
import { Locations } from './Links'

const Toggle = (props: any) => {
    const prefix = props.location === Locations.HOMEPAGE ? 'homepage' : ''
    const [tick, setTick] = useState(null)
    useEffect(() => {
        const newTick = new UIfx(mp3File, {
            volume: 0.3,
            throttleMs: 100,
        })
        setTick(newTick)
    }, [])
    return (
        <div className={styles[`${prefix}Toggle`]}>
            <ThemeToggler>
                {({ theme, toggleTheme }: any) => (
                    <label>
                        <input
                            type="checkbox"
                            onChange={e => {
                                if (tick != null) {
                                    tick.play()
                                }
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
