import { Checkbox, Rate} from 'antd'
import React from 'react'

export const NavbarComponent = () => {
    const onChange = () =>{};

    const renderContent = (type, options) =>{
        switch (type){
            case 'text':
                return options.map((option, index)=>{
                    return <div className='text-[#CECAC4] gap-1 items-center flex font-normal'><h1 key={index} className='text-[15px] font-bold bg-[#fff] text-[#CECAC4] pt-4'>
                    <div className='text-[14px]'>{option}</div></h1>

                    </div> 
                })
            case 'checkbox':
                return (
                    <Checkbox.Group className='w-[100%] flex flex-col' onChange={onChange}>
                        {options.map((option,index) => {
                    return(
                        <>
                        <Checkbox key={index} value={option.value}>{option.lable}</Checkbox>
                        </>
                    )
                })}
                    </Checkbox.Group>
            )
            case 'rating':
                return options.map((option)=>{
                    return(
                        <div className='flex gap-3'>
                        <Rate className='flex text-xs' disabled defaultValue={option} />
                        <span>{`tu ${option} sao`}</span>
                        </div>
                    )
                })
                case 'price':
                    return options.map((option)=>{
                        return(
                            <div className='rounded-[10px] bg-[#EEEEEE] w-fit p-[4px] text-[#38383D]'>
                            {option}
                            </div>
                        )
                    })
            default:
                return {}
        }
    }
  return (
    <div className='gap-6 pt-5'>
        <h4 className='text-[20px] bg-[#38383D] font-medium  '>Lable</h4>

        <div className='flex flex-col gap-3'>
        {renderContent('text', ['TV','Tu Lanh','May Giat'])} 
        </div>
        <div>
        {renderContent('checkbox', [
            {value: 'a' , lable: 'A'},
            {value: 'b' , lable: 'B'},
        ])} 
        </div>
        <div>
        {renderContent('rating', [3, 4, 5])} 
        </div>
        <div>
        {renderContent('price', ['tren 40', ' duoi 40'])} 
        </div>
    </div>
  )
}
