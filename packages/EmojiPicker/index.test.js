import React from 'react'

import { render } from '../../utils/tests'

import { EmojiPicker, useEmojiPicker } from './index'

describe('<EmojiPicker>', () => {
  it('should render correctly', () => {
    function Test() {
      const emojiPicker = useEmojiPicker()
      return (
        <>
          <EmojiPicker.Trigger {...emojiPicker}>open</EmojiPicker.Trigger>
          <EmojiPicker aria-label="emoji-picker" {...emojiPicker} />
        </>
      )
    }

    const { getByText, queryByRole } = render(<Test />)
    expect(queryByRole('dialog')).toBeNull()
    getByText('open').click()
    expect(queryByRole('dialog')).toHaveTextContent('Smileys & Emotion')
  })
})
