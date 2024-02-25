import React from 'react'
import { Col, Row } from 'antd';
import { Input } from 'antd';
const { Search } = Input;

const HeaderComponent = () => {
  return (
    <div className='h-40 bg-[#1A94FF] text-center pt-[30px] pr-[120px] justify-center items-center  '>
      <Row>
      <Col className='text-[30px] text-[#fff] font-bold ' span={3}>Laptop</Col>
      <Col className='text-[18px] text-[#fff] font-bold' span={15}>
        <input className='p-2 w-max' type="text" placeholder='search' />
      </Col>
      <Col className='text-[18px] text-[#fff] font-bold' span={6}>
        col-8
      </Col>
    </Row>
    </div>
  )
}

export default HeaderComponent
