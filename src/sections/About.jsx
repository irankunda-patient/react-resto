import React from 'react'
import about from '../assets/about.jpeg'

const About = () => {
  return (
    <section className='h-[100vh] flex flex-1 flex-col max-sm:h-[100%]' id='about'>
      <h2 className="mt-[150px] text-center text-white font-montserrat text-[20px]">Our Story 👨‍🍳</h2>
      <div className="flex justify-center items-center gap-6 h-[80vh] sm:flex-col max-sm:flex-col max-sm:my-6 max-sm:h-[80%]">
        <img src={about} alt="aboutImg" className="" />
        <div className="flex flex-wrap w-[600px] max-sm:w-full">
          <p className='text-white'>In 2022, Stick and Fry Corner opened its doors in the heart of Nairobi. The restaurant quickly became a local favorite,
            combining traditional flavors with modern twists, using fresh, local ingredients. Known for its cozy ambiance and eco-friendly practices,
            Stick and Fry Corner offers a unique dining experience. One of their standout dishes is the delicious stick meat and fried potatoes,
            a rare treat that keeps customers coming back for more. For those wondering where to eat in Nairobi,
            Stick and Fry Corner is a must-visit. Today, it continues to thrive, offering exceptional food and warm hospitality.</p>
        </div>
      </div>
    </section>
  )
}

export default About
