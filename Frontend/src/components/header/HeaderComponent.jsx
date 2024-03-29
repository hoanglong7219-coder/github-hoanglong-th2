import React from 'react'
import { Badge, Col, Row } from 'antd';
import { WrapperHeader, WrapperTextHeader, WrapperHeaderAccount } from './style';
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import InputSearch from '../InputSearch/InputSearch';





const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader className='grid items-center flex-nowrap '>
        <Row>
          <Col  
               span={6}> <WrapperTextHeader>Laptop</WrapperTextHeader>
          </Col>
          <Col span={12}>
          <InputSearch placeholder="Nhập Từ Khóa" textbutton="Tìm Kiếm" size="large"  />
          </Col>
          <Col className='text-right pr-52 pt-8 flex gap-12 content-center' span={6}>
            <WrapperHeaderAccount className='flex '>
              <UserOutlined className='text-[45px] pl-20'/>
              <div >
                <div><span className='text-[12px] decoration-white pr-3 whitespace-nowrap'>Đăng nhập/Đăng Ký</span></div>
                
                <div className='flex-wrap content-center'>
                  <span className='text-[12px] decoration-white'>Tài Khoản</span> 
                  <CaretDownOutlined />
                </div>
              </div>
            </WrapperHeaderAccount>
            <div className='pt-4 flex'>
              
                <div>
                  <Badge count={4} size='small'><ShoppingCartOutlined className='text-[40px]'/></Badge>
                  </div>
                <div><span className='text-[12px] decoration-white whitespace-nowrap float-none'></span></div>
              
            </div>
          </Col>
        </Row>
    </WrapperHeader>
    </div>
  )
}

export default HeaderComponent
