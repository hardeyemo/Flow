import React from 'react'
import Section3pro from './Section3pro'
import first from '../assets/images/First.png'
import second from '../assets/images/Second.png'
import third from '../assets/images/Third.png'
import fourth from '../assets/images/Fourth.png'
import fifth from '../assets/images/Fifth.png'
import sixth from '../assets/images/Sixth.png'

const Section3 = () => {
  return (
    <div>
      <div className='flex flex-col items-center text-center gap-6'>
      <h1 className='text-[#1D1F1E] text-5xl max-md:text-4xl'>About us</h1>
      <p className='text-[#1D1F1E] w-[30vw] max-md:w-[90vw]'>At Flow, we're committed to a sustainable future. As a pioneering force in the green energy sector,
         we've been at the forefront of the transition to clean, renewable power sources. Our mission is 
         simple yet profound: to create a world where energy is not only abundant but also environmentally 
         responsible. We believe that by harnessing the power of nature, we can power the world and protect it simultaneously.</p>
         <button className='bg-white px-5 py-2 border-2 border-black rounded-full'>Get in touch</button>
      </div>
      <div className='flex flex-col gap-5 items-center m-20 max-md:text-center max-md:m-10'>
        <h1 className='text-5xl text-[#1D1F1E] max-md:text-4xl max-md:w-[90vw]'>Meet our experts</h1>
        <p className='max-md:w-[90vw]'>Our team boasts top green energy experts, driving innovation in sustainability.</p>
      </div>
      <div className='flex flex-col justify-center items-center gap-20 max-md:gap-8 '>
         <div className='flex gap-[30px] max-md:flex-col max-md:gap-1'>
         {
             <Section3pro 
                picture = {first}
                paragraph = 'Senior Sustainability Consultant'
                heading= 'Jenny Wilson'  />
         },
         {
             <Section3pro 
                picture = {second}
                paragraph = 'Senior Sustainability Consultant'
                heading= 'Cameron Williamson'  />
         },
         {
             <Section3pro 
                picture = {third}
                paragraph = 'Energy Analysts'
                heading= 'Courtney Henry'  />
         }
         </div>
         <div className='flex gap-[30px] max-md:flex-col max-md:gap-1'>
         {
             <Section3pro
                picture = {fourth}
                paragraph = 'Senior Renewable Energy Engineer'
                heading= 'Dianne Russell'  />
         },
         {
             <Section3pro 
                picture = {fifth}
                paragraph = 'Renewable Energy Engineer'
                heading= 'Brooklyn Simmons'  />
         },
         {
             <Section3pro 
                picture = {sixth}
                paragraph = 'Renewable Energy Engineer'
                heading= 'Jerome Bell'  />
         }
         </div>
      </div>
    </div>
  )
}

export default Section3
