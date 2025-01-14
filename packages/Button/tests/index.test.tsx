import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import { Link } from '@welcome-ui/link'
import { SunIcon } from '@welcome-ui/icons'
import { Icons } from '@welcome-ui/icons.font'

import { createTheme } from '../../Core/src'
import { render } from '../../../utils/tests'
import { Button } from '../src'

const content = 'Jungle'

describe('<Button />', () => {
  it('should render correctly', () => {
    const theme = createTheme()

    render(<Button dataTestId="button">{content}</Button>)

    const button = screen.getByTestId('button')

    expect(button).toHaveTextContent(content)
    expect(button).not.toBeDisabled()
    expect(button).toHaveStyleRule('background-color', theme.colors['primary-500'])
    expect(button).toHaveStyleRule('height', theme.buttons.sizes.md.height)
  })

  it('should call onClick property', () => {
    const onClick = jest.fn()

    render(
      <Button dataTestId="button" onClick={onClick}>
        {content}
      </Button>
    )

    const eventElement = screen.getByText(content)
    fireEvent.click(eventElement)

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('should look like a square', () => {
    const theme = createTheme()

    render(
      <Button dataTestId="button" shape="square" size="sm">
        {content}
      </Button>
    )
    const button = screen.getByTestId('button')

    expect(button).toHaveStyleRule('width', theme.buttons.sizes.sm.height)
    expect(button).toHaveStyleRule('height', theme.buttons.sizes.sm.height)
  })

  it('should have correct size', () => {
    const theme = createTheme()

    render(
      <Button dataTestId="button" size="sm">
        {content}
      </Button>
    )
    const button = screen.getByTestId('button')

    expect(button).toHaveStyleRule('height', theme.buttons.sizes.sm.height)
  })

  describe('disabled', () => {
    it('should not call onClick property', () => {
      const onClick = jest.fn()

      render(
        <Button dataTestId="button" disabled onClick={onClick}>
          {content}
        </Button>
      )

      const eventElement = screen.getByText(content)
      fireEvent.click(eventElement)

      expect(onClick).toHaveBeenCalledTimes(0)
    })

    it('should have disabled attribute', () => {
      const theme = createTheme()

      render(
        <Button dataTestId="button" disabled>
          {content}
        </Button>
      )

      const button = screen.getByTestId('button')

      expect(button).toBeDisabled()
      expect(button).toHaveStyleRule('background-color', theme.colors['nude-400'])
      expect(button).toHaveStyleRule('border-color', theme.colors['nude-400'])
    })
  })

  it('should forward as div', () => {
    render(
      <Button as="div" dataTestId="button">
        {content}
      </Button>
    )

    const button = screen.getByTestId('button')

    expect(button.tagName.toLowerCase()).toBe('div')
  })

  it('should forward as a', () => {
    render(
      <Button as="a" dataTestId="button" href={content}>
        {content}
      </Button>
    )

    const button = screen.getByTestId('button')

    expect(button.tagName.toLowerCase()).toBe('a')
    expect(button).toHaveAttribute('href', content)
  })

  it('should forward as Link', () => {
    render(
      <Button as={Link} className="wui-test" dataTestId="button" target="_blank">
        {content}
      </Button>
    )

    const button = screen.getByTestId('button')

    expect(button.tagName.toLowerCase()).toBe('a')
    expect(button).toHaveClass('wui-test')
    expect(button).toHaveAttribute('rel', 'noopener noreferrer') // added by target="_blank" on Link
  })

  it('should have correct Icon size with Icon and text', () => {
    const theme = createTheme()

    render(
      <Button dataTestId="button" size="sm">
        <SunIcon dataTestId="sun" />
        <span>{content}</span>
      </Button>
    )

    const button = screen.getByTestId('button')
    const icon = screen.getByTestId('icon-sun')

    expect(button).toHaveStyleRule('height', theme.buttons.sizes.sm.height)
    expect(icon).toHaveStyle({
      width: theme.buttons.icon.default.sm,
      height: theme.buttons.icon.default.sm,
      'font-size': theme.buttons.icon.default.sm,
    })
  })

  it('should have correct Icon size with Icon only', () => {
    const theme = createTheme()

    render(
      <Button dataTestId="button" size="md">
        <SunIcon dataTestId="sun" />
      </Button>
    )

    const button = screen.getByTestId('button')
    const icon = screen.getByTestId('icon-sun')

    expect(button).toHaveStyleRule('height', theme.buttons.sizes.md.height)
    expect(icon).toHaveStyle({
      width: theme.buttons.icon.only.md,
      height: theme.buttons.icon.only.md,
      'font-size': theme.buttons.icon.only.md,
    })
  })

  it('should have correct IconFont size with IconFont and text', () => {
    const theme = createTheme()

    render(
      <Button dataTestId="button" size="sm">
        <Icons.Sun dataTestId="sun" />
        <span>{content}</span>
      </Button>
    )

    const button = screen.getByTestId('button')
    const icon = screen.getByTestId('icon-font-sun')

    expect(button).toHaveStyleRule('height', theme.buttons.sizes.sm.height)
    expect(icon).toHaveStyle({
      width: theme.buttons.icon.default.sm,
      height: theme.buttons.icon.default.sm,
      'font-size': theme.buttons.icon.default.sm,
    })
  })

  it('should have correct IconFont size with IconFont only', () => {
    const theme = createTheme()

    render(
      <Button dataTestId="button" size="md">
        <Icons.Sun dataTestId="sun" />
      </Button>
    )

    const button = screen.getByTestId('button')
    const icon = screen.getByTestId('icon-font-sun')

    expect(button).toHaveStyleRule('height', theme.buttons.sizes.md.height)
    expect(icon).toHaveStyle({
      width: theme.buttons.icon.only.md,
      height: theme.buttons.icon.only.md,
      'font-size': theme.buttons.icon.only.md,
    })
  })
})
