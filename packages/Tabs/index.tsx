import React from 'react'
import { Tab as ReakitTab, TabOptions as ReakitTabOptions } from 'reakit/Tab'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import { TabList } from './TabList'
import { TabPanel } from './TabPanel'
import * as S from './styles'

export type TabProps = CreateWuiProps<'button', ReakitTabOptions>

export const TabComponent = forwardRef<'button', TabProps>((props, ref) => {
  const { as, children, id, ...rest } = props
  return (
    <ReakitTab id={id} ref={ref} {...rest}>
      {tabProps => (
        <S.Tab as={as} {...tabProps}>
          {children}
        </S.Tab>
      )}
    </ReakitTab>
  )
})

TabComponent.displayName = 'Tab'

export const Tab = Object.assign(TabComponent, { List: TabList, Panel: TabPanel })

export { useTabState } from 'reakit/Tab'