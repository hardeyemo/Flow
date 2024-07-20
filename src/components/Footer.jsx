import React from 'react'
import circle from '../assets/images/circle.png'
import flow from '../assets/images/Left Nav.png'
import facebook from '../assets/images/Group (1).png'
import Instagram from '../assets/images/mdi_instagram.png'
import LinkedIn from '../assets/images/mdi_linkedin.png'


const Footer = () => {
  return (
    <div className='bg-[#022C22] mt-[80px] max-md:mt-8 max-md:pt-10 '>
        <div className='flex justify-between items-center max-md:flex-col max-md:gap-8'>
      <div className='flex flex-col gap-[40px] pl-[100px] max-md:text-center max-md:pl-0'>
            <h1 className='text-[#FFFFFF] text-6xl w-[35vw] max-md:w-[90vw] max-md:text-3xl'>Your Source for Green Energy Updates</h1>
            <p className='text-[#FFFFFF] w-[28vw] max-md:w-[90vw]'>Stay in the loop with our Green Horizon newsletter, where we deliver bite-sized insights into the latest green energy solutions.</p>
          <div className='flex items-center gap-4 max-md:flex-col'>
                <input className='bg-[white] px-4 h-[50px] w-[60%] rounded-3xl text-[#818898] max-md:w-[80%]' type="text" placeholder='Your e-mail...' id="" />
                <button className='bg-[#BEF264] font-semibold text-black px-5 py-3 rounded-full'>Get in touch</button>
          </div>
      </div>
      <img src={circle} alt="" />
    </div>
    <div className='flex justify-around mt-[100px] mb-[150px] max-md:flex-col max-md:items-center max-md:gap-7 max-md:text-center max-md:mt-10 max-md:mb-10'>
        <div>
        <img src={flow} alt="flow" />
        </div>
            <div className='flex flex-col gap-[20px] max-md:gap-2'>
                <p className='text-[#FFFFFF] text-[20px]'>Platform</p>
                <p className='text-[#c0b8b8]'>Solutions</p>
                <p className='text-[#c0b8b8]'>How it works</p>
                <p className='text-[#c0b8b8]'>Pricing</p>
            </div>

            <div className='flex flex-col gap-[20px] max-md:gap-2'>
                <p className='text-[20px] text-[#FFFFFF]'>Company</p>
                <p className='text-[#FFFFFF]'>About</p>
                <p className='text-[#c0b8b8]'>Our Mission</p>
                <div className='flex gap-4 items-center'>
                    <p className='text-[#c0b8b8]'>Careers</p>
                    <p className='bg-[#BEF264] text-[13px] px-2 rounded-md'>HIRING</p>
                </div>
                <p className='text-[#c0b8b8]'>Contact</p>
            </div>

           <div className='flex flex-col gap-[20px] max-md:gap-2'>
                <p className='text-[20px] text-[#FFFFFF]'>Resources</p>
                <p className='text-[#c0b8b8]'>Blog</p>
                <p className='text-[#c0b8b8]'>Help Center</p>
                <p className='text-[#c0b8b8]'>Support</p>
           </div>

           <div className='flex flex-col gap-4 max-md:gap-3'>
                <div className='flex items-center gap-4 bg-[#556555] rounded-3xl pr-4'>
                    <img className='bg-[#BEF264] px-4 py-3 rounded-full' src={facebook} alt="" />
                    <p className='text-[16px] text-[#FFFFFF]'>Follow us on Facebook</p>
                </div>
                <div className='flex items-center gap-4 bg-[#556555] rounded-3xl pr-4'>
                   <img className='bg-[#BEF264] p-3 rounded-full' src={Instagram} alt="" />
                   <p className='text-[16px] text-[#FFFFFF]'>Follow us on Instagram</p>
                </div>
                <div className='flex items-center gap-4 bg-[#556555] rounded-3xl pr-4'>
                    <img className='bg-[#BEF264] p-3 rounded-full' src={LinkedIn} alt="" />
                    <p className='text-[16px] text-[#FFFFFF]'>Follow us on LinkedIn</p>
                </div>
           </div>
    </div>
            <div className='flex justify-end pr-[140px] pb-[40px] text-[#c0b8b8] max-md:pr-[80px]'><p>© 2024 Flow. All rights reserved.</p></div>
    </div>
  )
}

export default Footer
