import { useState } from 'react';
import flow from '../assets/images/Left Nav.png'
import { CiMenuFries } from "react-icons/ci";
import { RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  function handleMe(){
    setMenu(!menu)
  }
  return (
  <div>
      <div className='flex justify-between items-center text-white bg-[#022C22] py-[25px] px-20 w-full max-md:px-5 max-md:py-3'>
      <ul className='flex items-center gap-5'>
        <img className='max-md:w-[20vw]' src={flow} alt="flow" />
        <li className='max-md:hidden'>About us</li>
        <li className='max-md:hidden'>Team</li>
        <li className='max-md:hidden'>Solutions</li>
        <li className='max-md:hidden'>Blog</li>
      </ul>
      <button className='bg-[#022C22] max-md:hidden px-4 py-2 border-2 border-white rounded-full'>Get in touch</button>
    <div onClick={handleMe} className='max-md:flex hidden'>{menu ? <RiCloseFill /> : <CiMenuFries  />}</div>
    </div>
    {menu &&
        <div className='flex flex-col items-center gap-3 p-3 text-[#BEF264] bg-[#022C22] h-full'>
          <p>ABOUT US</p>
          <p>TEAM</p>
          <p>SOLUTIONS</p>
          <p>BLOG</p>
          <button className='bg-[#022C22] px-3 py-2 border-2 border-white rounded-full'>GET IN TOUCH</button>
      </div>
    }
  </div>
  )
}

export default Navbar
