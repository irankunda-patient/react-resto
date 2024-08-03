import React from 'react'
import { FaPhone, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'
import { FaLocationPin, FaMapLocation } from 'react-icons/fa6'
import Button from '../components/Button'
import Socials from '../components/Socials'

const Contact = () => {
  return (
    <section className='h-[100vh] flex items-center justify-start flex-col max-sm:gap-6 max-sm:h-[100%] lg:mt-[100px] gap-2' id='contact'>  
      <div className="flex flex-col justify-center items-center text-white gap-5">
        <h2 className="text-[23px]">Contact Us</h2>
        <p className='flex items-center justify-center font-mono'><FaWhatsapp />/<FaPhone /> : (+254) 0212102</p>
        <p className='flex items-center font-montserrat'><FaLocationPin /> : Kenya/Nairobi</p>
      </div>
      <form className="flex flex-col w-[500px] gap-2 max-sm:w-full">
        <input type="text" name='name' placeholder='Name' className='p-2 font-popins bg-slate-200 text-black rounded' autoComplete='0'/>
        <input type="email" name="email" id="" placeholder='Email' className='p-2 font-popins bg-slate-200 text-black rounded'/>
        <textarea name="message" id="" placeholder='Meassage' className='p-2 font-popins bg-slate-200 text-black rounded resize-none'></textarea>
        <Button type='submit' text='Send' icon={<FaTelegramPlane/>} styles='flex items-center bg-white justify-center rounded-full
         font-popins font-bold py-3 hover:bg-[#ffffffd8]'/>
      </form>
      <div className="mt-5">
      <Socials />
      </div>
    </section>
  )
}

export default Contact
