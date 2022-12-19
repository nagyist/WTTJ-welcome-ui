import { Box } from '@welcome-ui/box'
import { MDXProvider } from '@mdx-js/react'

import { Header } from '../../components/Header'
import { MDXComponents } from '../../mdx'
import { Navigation } from '../../components/Navigation'

interface DocumentationLayoutProps {
  children: React.ReactNode
}

export const DocumentationLayout = ({ children }: DocumentationLayoutProps) => {
  return (
    <>
      <Header />
      <Box as="main" backgroundColor="light-900" display="block">
        <Box display="flex" margin="0 auto" maxW={1000}>
          <Box
            as="nav"
            display={{ _: 'none', lg: 'block' }}
            flexShrink={0}
            h="calc(100vh - 4.375rem)"
            position="sticky"
            top={70}
            w={270}
          >
            <Navigation />
          </Box>
          <Box>
            <MDXProvider components={MDXComponents}>{children}</MDXProvider>
            <footer>footer</footer>
          </Box>
        </Box>
      </Box>
    </>
  )
}
