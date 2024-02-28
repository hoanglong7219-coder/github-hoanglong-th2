import React from 'react'
import {Input} from 'antd'

const InputComponent = ({size, placeholder, ...rests}) => {
  return (
    <Input 
    className='bg-white'
    size={size}
    placeholder={placeholder} 
    {...rests}
    
    />
  )
}

export default InputComponent
