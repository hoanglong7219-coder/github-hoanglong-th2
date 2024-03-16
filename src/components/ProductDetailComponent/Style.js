import { Image, Col, InputNumber } from "antd";
import styled from "styled-components";

export const  WrapperStyleImageSmall = styled(Image)`
    height:64px;
    width:64px;
    padding-top: 10px;
`
export const WrapperStyleCol = styled(Col)`
 flex-basis: unset;
 display:flex;

`

export const WrapperProductName = styled.h1`
    margin: 0px;
    color: rgb(39, 39, 42);
    font-size: 20px;
    font-weight: 500;
    line-height: 150%;
    word-break: break-word;
    white-space: break-spaces;
    
`

export const WrapperProductPrice = styled.h1`
    font-size: 24px;
    font-weight: 600;
    line-height: 150%;
    padding:10px;
    margin-top: 10px;
    
`

export const WrapperProductTransport = styled.div`
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
    padding:10px;
    margin-top: 10px;
    
`
export const WrapperProductQuantity = styled.h1`
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    margin: 0px;
    padding-left : 40px;
    padding-bottom:18px;
    
`
export const WrapperInputNumber = styled(InputNumber)`
    &.ant-input-number.ant-input-number-sm{

    width:50px;
    height:32px;
}

`