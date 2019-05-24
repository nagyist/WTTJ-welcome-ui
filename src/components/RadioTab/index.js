import React from 'react'
import { bool, func, string } from 'prop-types'

import { Input } from './styles'

export const RadioTab = ({ checked, disabled, name, onBlur, onChange, onFocus, value }) => (
  <Input
    defaultChecked={checked}
    disabled={disabled}
    id={value}
    name={name}
    onBlur={onBlur}
    onChange={onChange}
    onFocus={onFocus}
    type="radio"
    value={value}
  />
)

RadioTab.propTypes = {
  checked: bool,
  disabled: bool,
  name: string,
  onBlur: func,
  onChange: func,
  onFocus: func,
  value: string
}
