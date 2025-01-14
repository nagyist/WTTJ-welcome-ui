import React from 'react'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import * as Ariakit from '@ariakit/react'

import * as S from './styles'
import { PopoverTrigger } from './Trigger'
import { UsePopover } from './usePopover'
import { Content } from './Content'

export interface PopoverOptions extends Ariakit.PopoverProps {
  /** call a function when popover closed */
  onClose?: () => void
  store: UsePopover
}

export type PopoverProps = CreateWuiProps<'div', PopoverOptions>

const PopoverComponent = forwardRef<'div', PopoverProps>(
  ({ children, onClose, store, ...rest }, ref) => {
    const { withCloseButton } = store

    return (
      <S.Popover
        store={store}
        {...rest}
        $withCloseButton={withCloseButton}
        as={undefined}
        ref={ref}
      >
        <Content onClose={onClose} store={store}>
          {children}
        </Content>
      </S.Popover>
    )
  }
)

export const Popover = Object.assign(PopoverComponent, {
  Content: S.Content,
  Title: S.Title,
  Trigger: PopoverTrigger,
})
