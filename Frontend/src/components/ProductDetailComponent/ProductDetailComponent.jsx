import React from 'react'
import { Col, Image, Row, Button } from 'antd'
import productimg from "../../Assets/xiaomi.png"
import productimgsmall from "../../Assets/xiaomismall.jpg"
import { WrapperProductName,WrapperProductPrice,WrapperProductTransport,WrapperProductQuantity,WrapperInputNumber } from './Style'
import { StarFilled,MinusOutlined,PlusOutlined } from '@ant-design/icons';

export const ProductDetailComponent = () => {
  const onChange = () =>{}
  return (
    <Row className='p-4 pt-3 bg-white'>
      <Col span={10}>
        <Image src={productimg} alt='productimg' preview="false"></Image>
        <Row className='flex justify-between pt-3 basis-0'>
          <Col span={4}>
          <Image width="64px" height="64px" src={productimgsmall} alt='productimgsmall' preview="false"></Image>
          </Col>
          <Col span={4}>
          <Image width="64px" height="64px" src={productimgsmall} alt='productimgsmall' preview="false"></Image>
          </Col>
          <Col span={4}>
          <Image width="64px" height="64px" src={productimgsmall} alt='productimgsmall' preview="false"></Image>
          </Col>
          <Col span={4}>
          <Image width="64px" height="64px" src={productimgsmall} alt='productimgsmall' preview="false"></Image>
          </Col>
          <Col span={4}>
          <Image width="64px" height="64px" src={productimgsmall} alt='productimgsmall' preview="false"></Image>
          </Col>
          <Col span={4}>
          <Image width="64px" height="64px" src={productimgsmall} alt='productimgsmall' preview="false"></Image>
          </Col>
        </Row>
      </Col>
      <Col span={14}>
        <WrapperProductName>Điện thoại Xiaomi Redmi Note 12 (8GB/128GB) - Hàng chính hãng</WrapperProductName>
        <div>
        <StarFilled className='text-xs text-orange-200'  />
        <StarFilled className='text-xs text-orange-200'  />
        <StarFilled className='text-xs text-orange-200'  />
        <span className='leading-6 text-[#9C9487] text-[14px]'>| Selling 1000</span>
        </div>
        <div>
          <WrapperProductPrice>3.790.000₫</WrapperProductPrice>
          <WrapperProductTransport>
            <span>Giao đến Q. 1, P. Bến Nghé, Hồ Chí Minh</span>
            <span className='pl-5 text-blue-500 cursor-pointer'>Đổi</span>
          </WrapperProductTransport>
          <div>
            <WrapperProductQuantity>
              Số Lượng
            </WrapperProductQuantity>
            <div className='gap-3 flex items-center rounded-sm divide-solid pl-16 font-sans'>
            <Button className='p-[6px]  bg-transparent' icon={<MinusOutlined/>} ghost></Button>

            <WrapperInputNumber className='text-center flex justify-center items-center' size='small' defaultValue={0} onChange={onChange} />

            <Button className='p-[6px]  bg-transparent' icon={<PlusOutlined />} ghost></Button>
            </div>
            <div className='flex gap-3 p-5'>
            <Button className="bg-[#A4000A] w-[328px] h-[40px] p-2 cursor-pointer font-light text-[16px] leading-[150%] whitespace-nowrap box-border "size='large' type="primary">
              Mua Ngay
            </Button>
            <Button className="bg-[#181A1B] border-[#0043B0] text-[#0043B0] w-[328px] h-[40px] p-2 cursor-pointer font-light text-[16px] leading-[150%] whitespace-nowrap box-border "size='large' type="primary">
              Thêm Vào Giỏ
            </Button>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  )
}
