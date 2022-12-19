import { BookIcon, GithubIcon, SearchPeopleIcon } from '@welcome-ui/icons'
import { Box } from '@welcome-ui/box'
import { Button } from '@welcome-ui/button'
import { DocSearch } from '@docsearch/react'
import { Flex } from '@welcome-ui/flex'
import { Grid } from '@welcome-ui/grid'
import Link from 'next/link'
import '@docsearch/css'

import { Logo } from '../Logo'

import { ThemeSelector } from './ThemeSelector'

const MENU = [
  {
    name: 'Github',
    icon: <GithubIcon />,
    href: 'https://github.com/WTTJ/welcome-ui',
    isExternal: true,
  },
  {
    name: 'Blog',
    icon: <BookIcon />,
    href: '/blog',
  },
  {
    name: 'Welcome to the jungle',
    icon: <SearchPeopleIcon />,
    href: 'https://www.welcometothejungle.com/en/companies/wttj',
    isExternal: true,
  },
]

export const Header = () => {
  return (
    <Box
      as="header"
      backgroundColor="black"
      color="white"
      h={{ _: 40, lg: 60 }}
      position="sticky"
      top={0}
    >
      <Grid
        alignItems="center"
        gridTemplateColumns="1.5fr 2fr 1.5fr"
        h="100%"
        margin="0 auto"
        maxW={1200}
      >
        <Flex align="center" aria-label="Back homepage" as={Link} href="/">
          <Logo h={37} w={63} />
        </Flex>
        <Box>
          <DocSearch
            apiKey="32543c62b03cbc6b714a873dca1feec4"
            appId="1ZI5OZ0946"
            disableUserPersonalization
            indexName="welcome-ui"
            placeholder="Search the docs"
          />
        </Box>
        <Flex gap="sm" justify="flex-end">
          <ThemeSelector />
          {MENU.map(menu => (
            <Button
              aria-label={menu.name}
              as={Link}
              href={menu.href}
              key={`header-menu-${menu.name}`}
              shape="circle"
              size="sm"
              target={menu.isExternal ? '_blank' : undefined}
            >
              {menu.icon}
            </Button>
          ))}
        </Flex>
      </Grid>
    </Box>
  )
}
