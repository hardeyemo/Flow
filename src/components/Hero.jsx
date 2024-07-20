import heroright from '../assets/images/Rectangle 2689.png'
import heroleft from '../assets/images/Rectangle 2687.png'
import heroicon from '../assets/images/Icon (1).png'
import rightbottom from '../assets/images/Image.png'
import leftbottom from '../assets/images/Image (1).png'
import img1 from '../assets/images/Logo (2).png'
import img2 from '../assets/images/Logo (1).png'

const Hero = () => {
  return (
    <div className='h-[140vh] bg-[#022C22] max-md:h-full max-md:pb-5'>
        <div className='text-white flex justify-between pt-20 max-md:flex-col-reverse max-md:items-center max-md:pt-[10px] max-md:gap-6'>
        <img className='h-[50vh] w-[29vh] relative top-[80px] max-md:w-[80%] max-md:h-[25vh] max-md:top-[10px]' src={heroleft} alt="heroleft" />
            <div className='flex flex-col text-center items-center gap-8 max-md:gap-5'>
                    <div className='flex items-center gap-4'>
                        <img src={heroicon} alt="heroicon" />
                        <p>Powering Tomorrow</p>
                    </div>
                        <h1 className='text-8xl w-[30vw] max-md:w-[90vw] max-md:text-2xl'>The Future of Green Energy</h1>
                            <p className='w-[25vw] max-md:w-[90vw]'>Our commitment to green energy is paving the way for a cleaner, healthier planet. Join us on a journey towards a future where clean, renewable energy sources transform the way we power our lives.</p>
                        <div className='flex gap-4'>
                            <button className='bg-green-500 text-[#022C22] font-bold px-5 py-3 rounded-full'>See our solutions</button>
                            <button className='bg-[#022C22] px-5 py-3 border-2 border-white rounded-full max-md:p-2'>Get in touch</button>
                        </div>
            </div>
        <img className='h-[30vh] w-[29vh] max-md:w-full' src={heroright} alt="heroright" />
    </div>
                            <div className='flex justify-around max-md:flex-col max-md:gap-7 max-md:items-center'>
                                <img  className='h-[150px] max-md:relative max-md:top-6 max-md:w-[80%]' src={leftbottom} alt="leftbottom" />
                                <img className='max-md:w-[80%] ' src={rightbottom} alt="rightbottom" />
                            </div>

                <div className='text-white pt-40 flex flex-col items-center text-center gap-14 max-md:flex-col max-md:pt-10'>
                    <h1 className='text-5xl w-[24vw] max-md:w-[90vw] max-md:text-4xl'>Global partners that trusted us</h1>
                        <div className='flex items-center gap-6 max-md:flex-col'>
                        <img className='w-[60%]' src={img1} alt="img1" />
                        <img className='w-[60%]' src={img2} alt="img1" />
                        <img className='w-[60%]' src={img1} alt="img1" />
                        <img className='w-[60%]' src={img2} alt="img1" />
                        </div>
                </div>
    </div>
  )
}

export default Hero
