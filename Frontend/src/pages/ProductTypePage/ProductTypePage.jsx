import React from 'react'
import {NavbarComponent}  from '../../components/NavbarComponent/NavbarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { Col, Pagination, Row } from 'antd'

export const ProductTypePage = () => {
  const onChange = () => {}
  return (
    <div className='py-0 px-[70px] bg-[#efefef] '>
    <Row className='flex flex-nowrap pt-[10px] h-[1100px]'>
        <Col span={4} className='bg-[#fff] pr-[20px]'>
        <NavbarComponent/>
        </Col>
        <Col span={20}>
          <div className='flex flex-wrap justify-center gap-[15px] mt-[20px]' >
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
          </div>
          <Pagination showQuickJumper defaultCurrent={2} total={100} onChange={onChange} className='text-center mt-4'></Pagination>
        </Col>
    </Row>
    </div>
  )
}
