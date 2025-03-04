import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

function Socials() {
  return (
    <section className='text-white flex mb-6  gap-5'>
      <a href='https://instagram.com/'><FaInstagram size={32} className='fill-[#e00c99]'/></a>
      <a href='https://facebook.com/'><FaFacebook size={32} className='fill-blue-700'/></a>
      <a href='https://x.com/'><FaTwitter size={32} className='fill-blue-500'/></a>
    </section>
  )
}

export default Socials
