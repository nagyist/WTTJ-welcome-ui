import type { AppProps } from 'next/app'
import { createTheme, WuiProvider } from '@welcome-ui/core'
import { darkTheme } from '@welcome-ui/themes.dark'
import { welcomeDarkTheme } from '@welcome-ui/themes.welcome-dark'
import { welcomeTheme } from '@welcome-ui/themes.welcome'

import type { Theme } from '../context/Theme'
import { useThemeContext } from '../context/Theme'

import { GlobalStyle } from './GlobalStyle'

const getTheme = (theme: Theme) => {
  if (theme === 'welcome') return welcomeTheme
  else if (theme === 'dark') return darkTheme
  else if (theme === 'welcomeDark') return welcomeDarkTheme
  else return undefined
}

export const Core = ({ Component, pageProps }: AppProps) => {
  const { theme } = useThemeContext()
  const selectedTheme = getTheme(theme)
  const themeValues = createTheme(selectedTheme)

  return (
    <WuiProvider reactRootId="__next" theme={themeValues}>
      <GlobalStyle theme={themeValues} />
      <Component {...pageProps} />
    </WuiProvider>
  )
}
