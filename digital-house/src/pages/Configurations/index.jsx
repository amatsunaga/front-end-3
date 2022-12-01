import './style.scss'

import { useEffect } from "react"
import { useTheme } from "../../hooks/useTheme"
import { contents } from '../../assets/translate/contents'
import { useLanguage } from '../../hooks/useLanguage'

export function Configurations() {
    const { theme, changeTheme } = useTheme()

    return (
        <div className="configurations-component">

            <form id="theme-choice">
                <fieldset form='theme-choice'>
                    <input type="radio" name="theme" id="light" checked={theme === 'light'} onChange={() => changeTheme('light')} />
                    <label htmlFor="light">Claro</label>

                    <input type="radio" name="theme" id="dark" checked={theme === 'dark'} onChange={() => changeTheme('dark')} />
                    <label htmlFor="dark">Escuro</label>

                    <input type="radio" name="theme" id="high-contrast" checked={theme === 'high-contrast'} onChange={() => changeTheme('high-contrast')} />
                    <label htmlFor="high-contrast">Alto Contraste</label>
                </fieldset>
            </form>

        </div>
    )
}
