import React from 'react'
import InputComponent from '../InputComponent/InputComponent';
import {SearchOutlined} from '@ant-design/icons';
import {Button} from 'antd'


const InputSearch = (props) => {
    const {size, placeholder , textbutton} = props
  return (
    <div className='flex pt-14 gap-3'>
        <InputComponent className='bg-white' size={size} placeholder={placeholder} />
        <Button className='pl-1' size={size} icon={<SearchOutlined />}>{textbutton}</Button>
    </div>
  )
}

export default InputSearch
