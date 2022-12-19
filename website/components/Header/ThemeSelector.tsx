import React from 'react'
import { DropdownMenu, useDropdownMenuState } from '@welcome-ui/dropdown-menu'
import { Box } from '@welcome-ui/box'
import { CrescentMoonIcon, StarIcon, StarOutlineIcon, SunIcon } from '@welcome-ui/icons'
import { Button } from '@welcome-ui/button'
import { Badge } from '@welcome-ui/badge'

import { Theme, useThemeContext } from '../../context/Theme'

const options = [
  { value: 'core', label: 'Core Theme', icon: SunIcon },
  { value: 'dark', label: 'Dark Theme', icon: CrescentMoonIcon, isBeta: true },
  { value: 'welcome', label: 'Welcome Theme', icon: StarOutlineIcon },
  { value: 'welcomeDark', label: 'Welcome Dark Theme', icon: StarIcon, isBeta: true },
]

export const ThemeSelector = () => {
  const menu = useDropdownMenuState({ gutter: 10 })
  const { setTheme, theme } = useThemeContext()

  const handleSetTheme = (theme: Theme) => {
    setTheme(theme)
    menu.hide()
  }

  return (
    <>
      <DropdownMenu.Trigger as={Button} shape="circle" size="sm" {...menu}>
        <SunIcon />
      </DropdownMenu.Trigger>
      <DropdownMenu {...menu} aria-label="Theme selector">
        {options?.map(({ icon: Icon, isBeta, label, value }) => (
          <DropdownMenu.Item
            color={theme === value ? 'dark-900' : undefined}
            fontWeight={theme === value ? 'bold' : undefined}
            key={value}
            onClick={() => handleSetTheme(value as Theme)}
            {...menu}
          >
            <Icon mr="md" size="sm" />
            <Box>{label}</Box>
            {isBeta && (
              <Badge ml="xs" size="sm">
                beta
              </Badge>
            )}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu>
    </>
  )
}
