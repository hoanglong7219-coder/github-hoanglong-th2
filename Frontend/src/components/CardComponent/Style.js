import { Card } from "antd";
import styled from "styled-components";

export const WrapperCard= styled(Card)`
    width:200px;
    height:400px;
    & img {
        height:200px;
        width:200px;
    }

`
export const StyleNameProduct = styled.div`
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: rgb(56,56,61);
`
export const WrapperReportText = styled.div`
    gap: 2px;
    font-size : 11px;
    color: rgb(128,128,137);
    display:flex;
    align-items: center;
    padding-top:2px;
`
export const WrapperPrice = styled.div `
    color : rgb(255,66,78);
    font-size:16px;
    font-weight:500;
    padding-top:5px;
    

`
export const WrapperDiscountText = styled.span`
    color : rgb(255,66,78);
    font-size:12px;
    font-weight:500;
    padding-left: 10px; 
`