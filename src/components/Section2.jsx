import React from 'react'

const Section2 = () => {
  return (
    <div className='flex flex-col mt-20 bg-[#FFF7ED] py-10 rounded-2xl m-8 max-md:items-center max-md:w-[95%] max-md:m-2 max-sm:mt-7'>
                 <div className='px-[290px]'>
                 <li className='pb-4 max-md:w-[60vw]'>About us</li>
                 <hr />
                 </div>
    <div className='flex justify-around mt-10 max-md:flex-col max-md:text-center max-md:gap-7'>
        <div className='flex flex-col gap-8 max-md:items-center'>
            <h1 className='text-5xl w-[26vw] text-[#1D1F1E] max-md:w-[90vw] max-md:text-4xl'>Committed to a sustainable future</h1>
            <p className='w-[28vw] text-[#646A69] max-md:w-[85vw]'>As a pioneering force in the green energy sector, we've been at the forefront of the transition to clean,
                renewable power sources. Our mission is simple yet profound: to create a world where energy is not only
                abundant but also environmentally responsible. We believe that
                by harnessing the power of nature, we can power the world and protect it simultaneously.</p>
      </div>
        <div className='flex flex-col gap-[40px]'>
                <div>
                <h1 className='text-5xl pb-2 text-[#1D1F1E] max-md:text-4xl'>5,000 Mwh</h1>
                <p className='text-[#646A69]'>Renewable Energy Generated</p>
                </div>
                <div>
                <h1 className='text-5xl pb-2 text-[#1D1F1E]  max-md:text-4xl'>2,500+</h1>
                <p className='text-[#646A69]'>Metric Tons of CO2 Reduced</p>
                </div>
                <div>
                <h1 className='text-5xl pb-2 text-[#1D1F1E] max-md:text-4xl'>10,000+</h1>
                <p className='text-[#646A69]'>Customers Served</p>
                </div>
                <div>
                <h1 className='text-5xl pb-2 text-[#1D1F1E] max-md:text-4xl'>15%</h1>
                <p className='text-[#646A69]'>Avg. Energy Saved</p>
                </div>
        </div>
    </div>
    </div>
  )
}

export default Section2
