import React from 'react'
import icon from '../assets/images/Tail icon.png'
import faq from '../assets/images/Dot.png'
import Section5pro from '../components/Section5pro'
import dot from '../assets/images/Divider.png'
import wade from '../assets/images/Ellipse 1.png'
import wind from '../assets/images/wind.png'
import jenny from '../assets/images/Ellipse 1 (1).png'
import alex from '../assets/images/Ellipse 1 (2).png'
import trash from '../assets/images/trash.png'
import fuel from '../assets/images/fuel.png'


const Section5 = () => {
  return (
    <div>
       <div className='bg-white flex flex-col items-center gap-[50px] text-center m-[100px] max-md:m-[20px]'>
          <h1 className='text-6xl w-[42vw] max-md:text-3xl max-md:w-[90vw]'>Our commitment to green energy is paving the way for a cleaner, healthier planet. </h1>
          <button className='bg-black text-white px-5 py-2 border-2 border-black rounded-full'>Get in touch</button>
     </div>
     <div className='bg-[#FFF7ED] p-[30px] m-7 rounded-2xl max-md:items-center max-md:m-3 max-md:p-[20px]'>
     <div className='px-[230px] max-md:px-5'>
                 <div className='flex items-center gap-4 pb-5 max-md:pb-5'>
                    <img src={faq} alt="faq" />
                    <p className='font-bold'>FAQ</p>
                 </div>
                 <hr />
                 </div>
    <div className='flex justify-evenly m-[40px] max-md:flex-col max-md:items-center max-md:text-center'>
            <div className='flex flex-col justify-between max-md:gap-5'>
                <h1 className='text-5xl w-[26vw] text-[#1D1F1E] max-md:text-3xl max-md:w-[93vw]'>Answers to the frequently asked questions.</h1>
                <button className='bg-white flex w-[32%] items-center gap-4 text-black px-5 py-2 border-2 border-black rounded-full max-md:w-[55%] ml-[80px]'>Contact us <img src={icon} alt="icon" /></button>
            </div>
    <div className='flex flex-col gap-[40px] max-md:mt-5 max-md:text-center'>
           <div>
           <h1 className='text-[18px] font-bold pb-2 text-[#1D1F1E]'>What is green energy?</h1>
           <p className='text-[#646A69] w-[32vw] max-md:w-[90vw]'>Green energy, also known as renewable energy, is derived from natural sources that are replenished on a human timescale. This includes solar, wind, hydro, geothermal, and biomass energy, among others.</p>
           </div>
           <div>
           <h1 className='text-[18px] font-bold pb-2 text-[#1D1F1E]'>How does green energy benefit the environment?</h1>
           <p className='text-[#646A69] w-[32vw] max-md:w-[90vw]'>Green energy reduces the reliance on fossil fuels, lowering greenhouse gas emissions and mitigating climate change. It also helps conserve natural resources and promotes a cleaner, sustainable future.</p>
           </div>
           <div>
           <h1 className='text-[18px] font-bold pb-2 text-[#1D1F1E]'>What green energy solutions does your company offer?</h1>
           <p className='text-[#646A69] w-[32vw] max-md:w-[90vw]'>We provide a range of green energy solutions, including solar power systems, wind turbines, energy-efficient appliances, and smart home technologies to enhance energy sustainability.</p>
           </div>
           <div>
           <h1 className='text-[18px] font-bold pb-2 text-[#1D1F1E]'>What support services do you offer after installing green energy solutions?</h1>
           <p className='text-[#646A69] w-[32vw] max-md:w-[90vw]'>We offer ongoing maintenance, monitoring, and support services to ensure the optimal performance and longevity of your green energy system. Our team is ready to assist with any issues that may arise.</p>
           </div>
           <div>
           <h1 className='pb-2 text-[18px] font-bold text-[#1D1F1E]'>How do solar panels work?</h1>
           <p className='text-[#646A69] w-[32vw] max-md:w-[90vw]'>Solar panels convert sunlight into electricity through photovoltaic cells. These cells generate direct current (DC), which is then converted into usable alternating current (AC) for household or commercial use.</p>
           </div>
   </div>
    </div>
     </div>
    <div className='flex justify-around pt-[60px] max-md:flex-col  max-md:pt-3 '>
            <div className='flex flex-col justify-between max-md:items-center max-md:gap-4 max-md:text-center'>
            <div className='flex flex-col gap-8'>
                <h1 className='text-6xl text-[#1D1F1E] w-[28vw] font-semibold max-md:w-[90vw] max-md:text-3xl'>Learn more from our blog</h1>
                <p className='text-[#646A69] w-[20vw] max-md:w-[90vw]'>Our team boasts top green energy experts, driving innovation in sustainability.</p>
            </div>
                <button className='bg-white font-semibold w-[30%] text-2xl text-black px-5 py-2 border-2 border-black rounded-full max-md:text-1xl max-md:w-[40%]'>See all</button>
     </div>
        <div className='max-md:pt-6 max-md:flex max-md:flex-col max-md:gap-3 max-md:w-full'>
        {
            <Section5pro 
             head='Wind Power: A Breath of Fresh Air for Clean Energy Enthusiasts'
             wind={wind}
             para='7 min read' 
             para2='Wade Warren'
             profilepic={wade} 
             dot={dot} 
             />
        },
        {
            <Section5pro 
             head='From Trash to Treasure: The Promising World of Biomass Energy'
             wind={trash}
             para='12 min read' 
             para2='Jenny Wilson'
             profilepic={jenny} 
             dot={dot} 
             />
        },
        {
            <Section5pro 
             head='Hydrogen: Fueling the Green Energy Revolution'
             wind={fuel}
             para='5 min read' 
             para2='Leslie Alexander'
             profilepic={alex} 
             dot={dot} 
             />
        }
        </div>
    </div>
    <div>
    </div>
    </div>
  )
}

export default Section5
