import React from 'react'
import dot from '../assets/images/Dot.png'
import jen from '../assets/images/jen.png'
import dian from '../assets/images/dian.png'
import cody from '../assets/images/cody.png'
import stella from '../assets/images/stella.png'
import Section4pro from '../components/Section4pro'

const Section4 = () => {
  return (
    <div className='bg-[#022C22] flex flex-col p-20 gap-20 mt-20 max-md:p-5 max-md:mt-5 max-md:gap-5'>
      <div className='flex flex-col gap-5 max-md:px-4'>
      <div className='flex items-center gap-4'>
        <img className='w-[12px]' src={dot} alt="dot" />
        <p className='text-[#FFFFFF] text-1xl'>Testimonials</p>
      </div>
      <hr />
      </div>
          <div className='flex max-md:text-center'><h1 className='text-7xl text-[#FFFFFF] max-md:text-4xl max-md:w-[90vw] max-md:text-[25px]'>What our customers say</h1></div>
     <div className='flex gap-3 overflow-x-scroll pb-20 p-4 scrollbar-thin scrollbar-thumb-[#FFFFFF] scrollbar-track-[#8c7979] max-md:flex-col max-md:overflow-hidden max-md:pb-0 max-md:gap-1'>
      {
        <Section4pro head = '“Flow transformed my energy use. Efficient, green tech, outstanding service!”'
        pic ={jen}
        head2 ='Jenny Wilson'
        para ='Solar energy service' />
      },
         {
          <Section4pro head = '“Flow redefined my energy game – green, efficient, and top-notch service!””'
          pic ={dian}
          head2 ='Dianne Russell'
          para ='EV service' />
        },
          {
          <Section4pro head = '“Flow transformed my energy use. Efficient, green tech, outstanding service!”'
          pic ={cody}
          head2 ='Cody Fisher'
          para ='Solar energy service' />
        },
          {
          <Section4pro head = '“Flow redefined my energy game – green, efficient, and top-notch service!””'
          pic ={stella}
          head2 ='stella green'
          para ='EV service' />
        }
     </div>
    </div>
  )
}

export default Section4
