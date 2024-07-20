import React from 'react'

const Section6 = () => {
  return (
    <div className='flex flex-col justify-center gap-[50px]'>
      <div className='flex flex-col justify-center text-center mt-[100px] gap-5 max-md:items-center max-md:mt-7'>
            <h1 className='text-5xl max-md:4xl'>FAQ</h1>
            <p className='text-[#646A69] max-md:w-[85vw]'>Here you will find the answers to the frequently asked questions.</p>
      </div>
      <div className='flex flex-col gap-5 items-center max-md:text-center'>
      <div className='flex flex-col gap-3 '>
      <hr />
        <h1 className='text-[#1D1F1E] text-[20px] font-semibold'>What is green energy?</h1>
        <p className='text-[#646A69] w-[36vw] max-md:w-[85vw]'>Green energy, also known as renewable energy, is derived from natural sources that are replenished on a human timescale. This includes solar, wind, hydro, geothermal, and biomass energy, among others.</p>
      </div>
      <hr />
      <div className='flex flex-col gap-3 '>
      <hr />
        <h1 className='text-[#1D1F1E] text-[20px] font-semibold max-md:w-[85vw]'>How does green energy benefit the environment?</h1>
        <p className='text-[#646A69] w-[36vw] max-md:w-[85vw]'>Green energy reduces the reliance on fossil fuels, lowering greenhouse gas emissions and mitigating climate change. It also helps conserve natural resources and promotes a cleaner, sustainable future.</p>
      </div>
      <div className='flex flex-col gap-3 '>
      <hr />
        <h1 className='text-[#1D1F1E] text-[20px] font-semibold max-md:w-[85vw]'>What green energy solutions does your company offer?</h1>
        <p className='text-[#646A69] w-[36vw] max-md:w-[85vw]'>We provide a range of green energy solutions, including solar power systems, wind turbines, energy-efficient appliances, and smart home technologies to enhance energy sustainability.</p>
      </div>
      <div className='flex flex-col gap-3'>
      <hr />
        <h1 className='text-[#1D1F1E] text-[20px] font-semibold max-md:w-[85vw]'>What is green energy?</h1>
        <p className='text-[#646A69] w-[36vw] max-md:w-[85vw]'>We offer ongoing maintenance, monitoring, and support services to ensure the optimal performance and longevity of your green energy system. Our team is ready to assist with any issues that may arise.</p>
      </div>
      <div className='flex flex-col gap-3'>
      <hr />
        <h1 className='text-[#1D1F1E] text-[20px] font-semibold max-md:w-[85vw]'>How do solar panels work?</h1>
        <p className='text-[#646A69] w-[36vw] max-md:w-[85vw]'>Solar panels convert sunlight into electricity through photovoltaic cells. These cells generate direct current (DC), which is then converted into usable alternating current (AC) for household or commercial use.</p>
      </div>
      </div>
    </div>
  )
}

export default Section6
