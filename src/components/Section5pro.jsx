import React from 'react'

const Section5pro = (props) => {
  return (
    <div className='flex items-center gap-8 max-md:flex-col max-md:gap-2 max-md:items-start max-md:pl-7'>
      <img src={props.wind} alt="" />
      <div className='flex flex-col gap-5 '>
          <h1 className='font-semibold text-[25px] w-[22vw] max-md:w-[80vw]'>{props.head}</h1>
          <div className='flex items-center gap-4'>
          <img src={props.profilepic} alt="" />
              <p className='font-semibold'>{props.para}</p>
              <img src={props.dot} alt="" />
              <p className='font-semibold'>{props.para2}</p>
          </div>
      </div>
    </div>
  )
}

export default Section5pro
