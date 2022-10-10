import React, { useState } from 'react'
import {close, logo, menu} from '../assets'
import { navLinks } from "../constants";

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className='flex w-full py-6 justify-between items-center'>
      <img src={logo} alt='hooback' className='w-[120px] h-[32px] ' />
      {/* Desktop */}
      <ul className='list-none flex-1 justify-end items-center sm:flex hidden'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-white text-[16px] ${index === navLinks.length-1 ? 'mr-0' : 'mr-10' } `} > 
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile*/}
      <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
            src={toggle ? close : menu} 
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle((prev) => !prev )}
          />

          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 rounded-xl sidebar min-w-[140px]` }> 
            <ul className='list-none flex-col justify-end items-center flex '>
              {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-white text-[16px] ${index === navLinks.length-1 ? 'mr-0' : 'mb-4' } `} > 
                <a href={`#${nav.id}`}>
                {nav.title}
                </a>
              </li>
              ))}
            </ul>
          </div>
      </div>

    </nav>
  )
}

export default Navbar
