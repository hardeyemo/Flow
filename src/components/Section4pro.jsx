import React from 'react'

const Section4pro = (props) => {
  return (
    <div className='flex flex-col bg-[#BEF264] rounded-3xl p-[40px] gap-[140px] max-md:flex max-md:gap-[40px] max-md:p-[20px]'>
        <h1 className='text-4xl w-[24vw] font-semibold max-md:w-[70vw] max-md:text-2xl'>{props.head}</h1>
        <div className='flex gap-5 items-center'>
            <img className='h-[70px]' src={props.pic} alt="" />
            <div className='flex flex-col'>
                <h2 className='text-[27px] font-semibold max-md:text-[20px]'>{props.head2}</h2>
                <p className='text-[23px] max-md:text-[18px]'>{props.para}</p>
            </div>
        </div>
      
    </div>
  )
}

export default Section4pro
