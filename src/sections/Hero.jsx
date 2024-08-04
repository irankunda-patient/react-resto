import React from 'react'
import StickMeat from '../assets/stickmeat.jpg'
import Button from '../components/Button'
import { FaArrowRight } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className='[100vh] flex justify-center items-center  pt-[150px] max-sm:flex-col gap-4 sm:flex-col lg:flex-row md:flex-row max-sm:h-[100%]'>
      <div className="order-2 max-sm:order-1">
        <img src={StickMeat} alt="StickMeat" width='800' height='800'/>
      </div>
      <div className="mx-1 flex flex-col">
        <h1 className='text-white-400 font-montserrat text-[45px]'>Welcome to <span className='text-[#ffc402]'>Stick & Fry Corner</span></h1>
        <p className='text-[#ffffffcd] font-montserrat text-[15px]'>Savor the Best Stick Meat and Fried Potatoes in Nairobi</p>
        <a href="#contact"><Button text='Try Now' styles='text-white flex border rounded-full justify-around items-center p-3 self-start mt-5 w-[120px] hover:transition-all duration-300 hover:border-[2px]' icon={<FaArrowRight size={20} fill='white' className=''/>}/></a>
      </div>
    </section>
  )
}

export default Hero
