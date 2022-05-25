import React, { forwardRef } from 'react'
import { Tab as ReakitTab, TabProps as ReakitTabProps } from 'reakit/Tab'
import { As } from '@welcome-ui/system'

import { TabList } from './TabList'
import { TabPanel } from './TabPanel'
import * as S from './styles'

export type TabOptions = { as?: As }
export type TabProps = ReakitTabProps & TabOptions

/**
 * @name Tabs
 */
export const TabComponent = forwardRef<HTMLButtonElement, TabProps>((props, ref) => {
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
