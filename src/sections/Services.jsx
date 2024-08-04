import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { menuList } from '../constants'
import Skeleton from '../components/Skeleton'

const Services = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <section className='h-[100vh] flex flex-1 flex-col max-sm:h-[100%]' id='menu'>
      <h1 className='mt-8 text-center text-white font-montserrat text-[23px]'>What we have for you <span className='w-2 h-2 bg-white'>🍽️</span></h1>
      <div className="grid grid-cols-3 gap-4 mt-5 max-sm:grid-cols-1">
        {menuList.map((menu) =>(
          loading ? <Skeleton Pstyles={menu.parentStyles} key={menu.img}/> : <Card imgSrc={menu.img} text={menu.text} Pstyles={menu.parentStyles} Cstyles={menu.childStyles} key={menu.img}/>
        ))}
      </div>
    </section>
  )
}

export default Services
