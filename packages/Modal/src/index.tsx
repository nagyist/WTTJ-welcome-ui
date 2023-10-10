import React from 'react'
import * as Ariakit from '@ariakit/react'
import { BoxProps } from '@welcome-ui/box'
import { As, CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { useTheme } from '@xstyled/styled-components'
import { Shape, ShapeProps } from '@welcome-ui/shape'

import * as S from './styles'
import { Header } from './Header'
import { Footer } from './Footer'
import { Content } from './Content'

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'auto'

export interface ModalOptions extends Ariakit.DialogOptions<'div'> {
  ariaLabel: string
  children: React.ReactElement
  size?: Size
}

export type ModalProps = CreateWuiProps<'div', ModalOptions>
export type UseModal = Ariakit.DialogStore
export type UseModalProps = Ariakit.DialogStoreProps & {
  /**
   * Call a function before closing the modal
   * @deprecated use onClose on <Modal /> instead
   */
  onClose?: () => void
}
export type UseModalState = Ariakit.DialogStoreState

export function useModal(options?: UseModalProps): UseModal {
  const { onClose, ...storeOptions } = options || {}

  const dialog = Ariakit.useDialogStore({
    animated: true,
    ...storeOptions,
  })

  return {
    ...dialog,
    hide: () => {
      dialog.hide()
      onClose?.()
    },
  }
}

const ModalComponent = forwardRef<'div', ModalProps>(
  ({ ariaLabel, children, hideOnInteractOutside = true, size = 'lg', store, ...rest }, ref) => {
    return (
      <Ariakit.Dialog
        aria-label={ariaLabel}
        backdrop={<S.Backdrop hideOnInteractOutside={hideOnInteractOutside} />}
        hideOnInteractOutside={hideOnInteractOutside}
        ref={ref}
        render={<S.Dialog size={size} />}
        store={store}
        {...(rest as Ariakit.DialogProps<'div'>)}
      >
        {children}
      </Ariakit.Dialog>
    )
  }
)

const Body = forwardRef<'div', BoxProps>((props, ref) => {
  return <S.Body ref={ref} {...props} />
})

Body.displayName = 'Body'

const Cover: React.FC<ShapeProps> = props => {
  const { modals } = useTheme()

  return (
    <div>
      <Shape {...modals.cover} {...props} />
    </div>
  )
}

type TriggerProps = { store: Ariakit.DialogStore; children: React.ReactNode; as?: As }

export const Trigger = forwardRef<'button', TriggerProps>(({ as, store, ...rest }, ref) => {
  return <Ariakit.DialogDisclosure as={as} ref={ref} store={store} {...rest} />
})

// Nested exports
export const Modal = Object.assign(ModalComponent, {
  Trigger,
  Content,
  Header,
  Body,
  Footer,
  Cover,
})
