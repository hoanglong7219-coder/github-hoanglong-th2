
import React from 'react';
import { StyleNameProduct , WrapperReportText, WrapperPrice, WrapperDiscountText } from './Style';
import { StarFilled } from '@ant-design/icons';
import { WrapperCard } from './Style';
import logo from '../../Assets/logo.png'
import { Image } from 'antd';

const CardComponent = () => {
  return (
    <WrapperCard
        className='mt-5 items-center gap-5 '
        hoverable
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
        <Image src={logo} alt="" width="68px" height="14px" />
        <StyleNameProduct>Iphone</StyleNameProduct>
        
        <WrapperReportText>
        <span><span className='pr-2'>4.21</span><StarFilled className='text-xs text-orange-200'  /></span>
        <span>| Selling 1000</span>
        </WrapperReportText>
        <WrapperPrice>1.000.000d
        <WrapperDiscountText>
            -5%
        </WrapperDiscountText>
        </WrapperPrice>

    </WrapperCard>
  )
}

export default CardComponent
