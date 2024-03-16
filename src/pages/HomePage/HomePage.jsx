import React from 'react'
import { ProductType } from '../../components/ProductType/ProductType'
import { WrapperProductType } from './Style'
import slider1 from '../../Assets/tiki1.png'
import slider2 from '../../Assets/tiki2.jpg'
import slider3 from '../../Assets/tiki3.png'
import { ImgSliderComponent } from '../../components/ImgSliderComponent/ImgSliderComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { NavbarComponent } from '../../components/NavbarComponent/NavbarComponent'
import { ButtonComponent } from '../../components/ButtonComponent/ButtonComponent'

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
        <div id='container' className='bg-[#efefef] py-0 px-48 h-{1000px} w-[100%]'>
        <ImgSliderComponent arrImg = {[slider1,slider2,slider3]}/>
            <div className='flex justify-items-center gap-4 mt-5 flex-wrap'>
              <CardComponent/>
              <CardComponent/>
              <CardComponent/>
              <CardComponent/>
              <CardComponent/>
            </div>
            <NavbarComponent/>
            <div className='w-[100%] flex justify-center mt-10'>
            <ButtonComponent/>
            </div>
            
        </div>
      </div>
    </>
    
  )
}

export default HomePage
