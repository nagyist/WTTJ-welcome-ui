import { createContext, useContext, useMemo, useState } from 'react'
import { object } from 'prop-types'

const themeStorage = (typeof window !== 'undefined' && localStorage.getItem('theme')) || 'welcome'

export type Theme = 'welcome' | 'dark' | 'welcomeDark' | 'core'

interface ThemeContextProps {
  theme: Theme
  setTheme: (theme: Theme) => void
}

interface ThemeProvider {
  children: React.ReactNode
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: themeStorage as Theme,
  setTheme: () => {
    return
  },
})

export function useThemeContext() {
  const { setTheme, theme } = useContext(ThemeContext)
  return { theme, setTheme }
}

export const ThemeProvider = ({ children }: ThemeProvider) => {
  const [theme, setTheme] = useState(themeStorage)
  typeof window !== 'undefined' && localStorage.setItem('theme', theme)

  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  ) as ThemeContextProps

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

ThemeProvider.propTypes = {
  children: object.isRequired,
}
