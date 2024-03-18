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
    <div>
      <div className='py-0 px-48'>
        <WrapperProductType>
        {arr.map((item)=>{
          return(
            <div className='text-[14px] block font-normal whitespace-nowrap leading-[150%] text-[#9B9285]'><ProductType name={item} key={item}/></div>

          )
        })}
        </WrapperProductType>
        <div className=' flex justify-center items-center '>
          <div id='container' className='bg-[#efefef] py-0 px-48 h-{1000px} w-[1652px]'>
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
        
      </div>
    </div>
    
  )
}

export default HomePage
