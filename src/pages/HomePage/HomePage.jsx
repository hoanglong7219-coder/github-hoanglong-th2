import React from 'react'
import { ProductType } from '../../components/ProductType/ProductType'
import { WrapperProductType } from './Style'
import slider1 from '../../Assets/tiki1.png'
import slider2 from '../../Assets/tiki2.jpg'
import slider3 from '../../Assets/tiki3.png'
import { ImgSliderComponent } from '../../components/ImgSliderComponent/ImgSliderComponent'
import CardComponent from '../../components/CardComponent/CardComponent'

const HomePage = () => {
  const arr =  ['TV', 'LapTop', 'Mac']

  return (
    <>
      <div className='py-0 px-48'>
        <WrapperProductType>
        {arr.map((item)=>{
          return(
            <ProductType name={item} key={item}/>
          )
        })}
        </WrapperProductType>
        <div id='container' className='bg-[#efefef] py-0 px-48 h-{1000px}'>
        <ImgSliderComponent arrImg = {[slider1,slider2,slider3]}/>
        <div>
          <CardComponent/>
        </div>
        </div>
      </div>
    </>
    
  )
}

export default HomePage
