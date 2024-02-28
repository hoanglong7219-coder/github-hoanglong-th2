import React from 'react'
import { ProductType } from '../../components/ProductType/ProductType'
import { WrapperProductType } from './Style'

const HomePage = () => {
  const arr =  ['TV', 'LapTop', 'Mac']

  return (
    <div className='py-0 px-48'>
      <WrapperProductType>
      {arr.map((item)=>{
        return(
          <ProductType name={item} key={item}/>
        )
      })}
      </WrapperProductType>
      HomePage
    </div>
  )
}

export default HomePage
