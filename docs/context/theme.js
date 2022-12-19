import React, { createContext, useContext, useState } from 'react'
import { object } from 'prop-types'

const themeStorage = (typeof window !== 'undefined' && localStorage.getItem('theme')) || 'welcome'

const ThemeContext = createContext({
  theme: themeStorage,
  setTheme: () => {},
})

export function useThemeContext() {
  const { theme } = useContext(ThemeContext)
  return theme
}

export function useSetThemeContext() {
  const { setTheme } = useContext(ThemeContext)
  return setTheme
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themeStorage)
  typeof window !== 'undefined' && localStorage.setItem('theme', theme)

  const value = {
    theme,
    setTheme,
  }
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

ThemeProvider.propTypes = {
  children: object.isRequired,
}
