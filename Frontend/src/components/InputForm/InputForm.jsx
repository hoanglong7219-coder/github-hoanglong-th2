import React, { useState } from 'react'

export const InputForm = (props) => {
    const [valueInput, SetvalueInput] = useState('')
    const {placeholder = 'Text', ...rests} = props
  return (
    <input placeholder={placeholder} value={valueInput} {...rests} />
  )
}
