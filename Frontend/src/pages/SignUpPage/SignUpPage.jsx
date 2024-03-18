import React from 'react'
import {WrapperSignInText,WrapperRightText} from './style.js'
import { InputForm } from '../../components/InputForm/InputForm.jsx'
import { Button, Image } from 'antd'
import tikisigninimg from '../../Assets/tikisignin.png'

export const SignUpPage = () => {
  return (
  <div className='flex items-center justify-center bg-[#00000087] h-[100vh]'>
    <div className='w-[800px] h-[444px] flex'>
      <div className='w-[500px] h-[529px] pt-[70px] px-[45px] pb-[24px] bg-[#fff] rounded-lg gap-5' >
        <WrapperSignInText>Tạo tài khoản</WrapperSignInText>
        <p className='text-[15px] m-0 pb-[20px]'>Vui lòng nhập số điện thoại</p>
        <div className='gap-7 flex flex-col'>
        <InputForm className='outline-none text-[14px] shadow appearance-none border rounded w-[410px] h-[48px]  border-b-4 text-[#242424] leading-tight focus:outline-none focus:shadow-outline' id="phone" type="number" placeholder="Phone Number" />
        </div>
        <Button className="bg-[#A4000A] w-[410px] h-[49px] p-2 cursor-pointer font-light text-[16px] leading-[150%] whitespace-nowrap box-border py-[13px] mt-[30px] mb-[10px] "size='large' type="primary">
            Tiếp Tục
        </Button>
        <p className='text-[#0D5CB6] mt-[20px] text-[13px] cursor-pointer inline-block'>Quên mật khẩu?</p>
        <p className='text-[#787878] text-[13px] mt-[10px]'>Chưa có tài khoản?<span className='ml-[5px] text-[#0D5CB6] text-[13px] cursor-pointer inline-block '>Tạo tài khoản</span></p>
      </div>

      <div className='flex items-center justify-center rounded-lg bg-white w-[300px] h-[529px] flex-col gap-1 ' >
       <Image src={tikisigninimg} preview={false} width='203px' height='203px'></Image>
       <WrapperRightText>Mua sắm tại Tiki</WrapperRightText>
       <span className='text-[13px] text-[#0B74E5] font-medium  '>Siêu ưu đãi mỗi ngày</span>
      </div>
      
    </div>
  </div>
  )
}
