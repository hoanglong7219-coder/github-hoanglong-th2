
import React from 'react';
import { Card } from 'antd';
import { StyleNameProduct , WrapperReportText, WrapperPrice, WrapperDiscountText } from './Style';
import { StarFilled } from '@ant-design/icons';

const CardComponent = () => {
  return (
    <Card
        className='mt-5 items-center gap-5'
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" width="200px" height="200px" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
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

    </Card>
  )
}

export default CardComponent
