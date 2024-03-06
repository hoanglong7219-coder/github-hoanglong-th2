import React from 'react'
import Slider from 'react-slick';
import {Image} from 'antd';

export const ImgSliderComponent = ({arrImg}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed: 3000
      };
  return (
    <div>
    <Slider  {...settings}>
      {arrImg.map((image,index)=>{
        return(
          <div>
          <Image className='object-fill' src={image} alt="slider" key={index} preview={false} width="100%" height="420px"/>
          </div>
        )
      })}
    </Slider>
    </div>
  )
}
