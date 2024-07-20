import sec1img from '../assets/images/sec.png'

const Section1 = () => {
  return (
    <div className='flex items-center justify-around pt-20 w-full max-md:flex-col-reverse max-md:pt-[30px] max-md:text-center max-md:gap-5'>
        <div className='bg-white flex flex-col items-start max-md:text-center max-md:items-center'>
            <div className='flex flex-col gap-16 max-md:gap-8'>
                    <p className='text-[#022C22] w-[18vw] font-bold max-md:w-[90vw]'>Our commitment to green energy is paving the way for a cleaner, healthier planet. </p>
                    <h1 className='text-[#929C9A] text-5xl pb-8 max-md:text-4xl max-md:pb-2'>EV charging </h1>
            </div>
                    <h1 className='text-[#1D1F1E] text-5xl border-b-2 border-black pb-6 max-md:text-4xl max-md:p-2'>Solar Energy</h1>
                    <hr className=' w-[100%] max-md:hidden' />
            <div className='flex flex-col gap-7'>
                <p className='text-[#646A69] w-[22vw] pt-9 max-md:w-[100%]'>Solar panels convert sunlight into electricity. Photovoltaic (PV) cells on these panels capture the energy from the sun and convert it into electrical power.</p>
                <p className='text-[#022C22] font-bold'>Learn more</p>
                <h1 className='text-[#929C9A] text-5xl max-md:text-4xl'>Wind Energy</h1>
                <h1 className='text-[#929C9A] text-5xl max-md:text-4xl'>Hydropower</h1>
            </div>
        </div>
        <img className='h-[60vh]' src={sec1img} alt="sec1img" />
    </div>
  )
}

export default Section1
