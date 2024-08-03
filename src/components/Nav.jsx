
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Nav = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <header>
      <nav className='w-[94vw] fixed flex justify-center items-center bg-black-gradient p-4 font-montserrat text-white max-sm:hidden sm:w-full'>
        <ul className='flex flex-row gap-6'>
          <li><a href="/">home</a></li>
          <li><a href="#menu">menu</a></li>
          <li><a href="#about">about</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
      </nav>
      <nav className={` ${toggle ? "hidden" : "flex"} p-6 bg-black-gradient fixed top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar text-white sm:hidden max-sm:mr-10`}>
        <ul className='flex flex-col gap-4 p-12  self-center'>
          <li><a href="/">home</a></li>
          <li><a href="#menu">menu</a></li>
          <li><a href="#about">about</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
      </nav>
      {!toggle ? <FaTimes className='text-[#fff]  right-4 fixed top-6 lg:hidden cursor-pointer sm:hidden max-sm:mr-9' onClick={() => setToggle(!toggle)} /> :
        <FaBars className={`text-[#fff]  right-4 fixed top-6 lg:hidden cursor-pointer sm:hidden max-sm:mr-9`} onClick={() => setToggle(!toggle)} />}
    </header>
  )
}

export default Nav
