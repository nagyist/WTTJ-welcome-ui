import styled, { css, system, th } from '@xstyled/styled-components'
import * as Ariakit from '@ariakit/react'
import { Box } from '@welcome-ui/box'

import { UseAccordionState } from '.'

export const Accordion = styled.div`
  ${th('accordions.wrapper')};
  ${system}
  transition: medium;

  &:hover {
    border-color: dark-400;
  }
`

export const Icon = styled(Box).withConfig({
  shouldForwardProp: prop => !['isOpen'].includes(prop),
})<{ isOpen: Ariakit.DisclosureStoreState['open'] }>(
  ({ isOpen }) => css`
    flex-shrink: 0;
    ${th('accordions.icon')};
    transform: ${isOpen ? 'rotate3d(0, 0, 1, 90deg)' : 'rotate3d(0)'};
    transition: medium;
    width: 24;
    height: 24;
    color: inherit;
    display: flex;
    border-radius: 12;

    & *:first-child {
      margin: auto;
    }
  `
)

export const Disclosure = styled(Ariakit.Disclosure)`
  ${th('accordions.title')};
  width: 100%;
  padding: ${th('accordions.padding')};
  background-color: transparent;
  border: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: xxl;

  &:focus,
  &:hover {
    cursor: pointer;
    ${Icon} {
      background-color: dark-100;
    }
  }

  &:focus {
    outline: 0;
    ${Icon} {
      color: inherit;
    }
  }
`

export const Content = styled(Ariakit.DisclosureContent).withConfig({
  shouldForwardProp: prop => !['isOpen'].includes(prop),
})(
  ({ isOpen }: { isOpen: UseAccordionState['open'] }) => css`
    ${th('accordions.content')};
    padding-inline: ${th('accordions.padding')};
    color: dark-700;

    ${isOpen &&
    css`
      padding-bottom: ${th('accordions.padding')};
    `}
  `
)
