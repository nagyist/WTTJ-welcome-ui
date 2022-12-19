import type { AppProps } from 'next/app'

import { Core } from '../components/Core'
import { ThemeProvider } from '../context/Theme'

require('@welcome-ui/icons.font/fonts/welcome-icon-font-2.css')

const App = (props: AppProps) => {
  return (
    <ThemeProvider>
      <Core {...props} />
    </ThemeProvider>
  )
}

export default App
